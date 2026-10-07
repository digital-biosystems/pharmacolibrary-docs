<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M04A&quot;,&quot;href&quot;:&quot;atc/M04A.md&quot;},{&quot;label&quot;:&quot;colchicine&quot;}]"></div>

# colchicine

- **generic name:** colchicine
- **ATC codes:** `M04AC01`, `M04AC51`
- **DrugBank:** [DB01394](https://go.drugbank.com/drugs/DB01394) · **PubChem:** [CID 2833](https://pubchem.ncbi.nlm.nih.gov/compound/2833)
- **molar mass:** 399.443 g/mol (C22H25NO6) — DrugBank
- **groups:** approved, investigational

## About

Colchicine is a medicine used mainly to treat gout, and also conditions such as pericarditis, Behçet's disease and familial Mediterranean fever. It is an approved, widely used antigout drug, and in the European Union it is also being considered for use in heart and blood vessel diseases such as myocardial infarction, stroke and coronary artery disease.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q326224](https://www.wikidata.org/wiki/Q326224) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| colchicine | parent | 399.443 | C22H25NO6 | DrugBank | [2833](https://pubchem.ncbi.nlm.nih.gov/compound/2833) | Rochdi_1994, Wright_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:21 | 1:47 | 0/2/0 | 0/0/0 | 0/0/0 | 194,841/8,741 | einfracz / qwen3.8-27b | 7 | 2/5 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Rochdi_1994_reference](drugs/drug_colchicine/Colchicine_Rochdi1994_reference.md) | — | 1-compartment (no model) | 7 | Rochdi M et al., Pharmacokinetics and absolute bioavaila…, European journal of clinica… (1994) | [10.1007/BF00194404](https://doi.org/10.1007/BF00194404) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Wright_2025_reference](drugs/drug_colchicine/Colchicine_Wright2025_reference.md) | — | 1-compartment (no model) | 3 | Wright DFB et al., The Influence of Patient Factors on the…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01551-y](https://doi.org/10.1007/s40262-025-01551-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=colchicine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inducer/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2B6` inhibitor, `CYP2C8` inhibitor, `CYP2E1` inducer, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TUBB (binder), TUBB (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 75 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rochdi_1994.pdf` | Rochdi M et al., Pharmacokinetics and absolute bioavaila…, European journal of clinica… (1994) | popPK | 10 | [10.1007/BF00194404](https://doi.org/10.1007/BF00194404) | [7957521](https://pubmed.ncbi.nlm.nih.gov/7957521) | The paper reports quantitative disposition parameters (CL, V, half-life) for colchicine in humans with values clearly visible in the text. |
| `Thomas_1989.pdf` | Thomas G et al., Zero-order absorption and linear dispos…, European journal of clinica… (1989) | popPK | 10 | [10.1007/BF00609430](https://doi.org/10.1007/BF00609430) | [2591469](https://pubmed.ncbi.nlm.nih.gov/2591469) | The paper reports specific quantitative pharmacokinetic parameters (half-life, Vss/f, CL/f) for colchicine in humans directly in the abstract text. |

<sub>queue written 2026-10-07T03:20:06.665906+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Banerjee_2023 | irrelevant | 0 | 0 | The study is a meta-analysis of SGLT2 inhibitors' effect on gout risk where colchicine is only a comparator component of a composite outcome, not a PK subject. |
| popPK | Chopra_2016 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on mitotic arrest and apoptosis where colchicine is used only as a comparator agent, not a subject of pharmacokinetic analysis. |
| popPK | Choudhary_2023 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro/in vivo efficacy of novel microtubule inhibitors that bind to the colchicine site, but it does not report the pharmacokinetic parameters (CL, V, etc.) of colchicine itself. |
| popPK | Declèves_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter kinetics in cell lines, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for colchicine in humans or animals. |
| popPK | Kohl_2023 | irrelevant | 0 | 0 | This is an in vitro toxicology study using an electrochemical membrane sensor and cell viability assays to measure toxicity (EC50, LoD), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Kreydiyyeh_1992 | irrelevant | 0 | 0 | The study investigates the effect of colchicine on linoleic acid transport in rat jejunal enterocytes, using colchicine as a mechanistic tool rather than as the subject of pharmacokinetic analysis. |
| popPK | Quarmby_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium influx in Chlamydomonas algae, using colchicine only as a tool compound, and reports no pharmacokinetic parameters. |
| popPK | Sato_2021 | irrelevant | 0 | 0 | The study investigates the clinical efficacy of colchicine in constrictive pericarditis using echocardiographic endpoints, not pharmacokinetics. |
| popPK | Takahashi_1995 | irrelevant | 0 | 0 | The paper uses colchicine as a neurotoxin to create hippocampal lesions in rats for a behavioral study; it does not measure pharmacokinetic parameters of colchicine. |
| popPK | Ughetto_2026 | irrelevant | 0 | 0 | This study investigates colchicine as an anti-inflammatory adjunct in heart transplantation preservation, reporting biomarkers (IL-6, Troponin I, etc.) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Weinling_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of thiocolchicoside, not colchicine. |
| popPK | Zafar_2017 | irrelevant | 0 | 0 | The paper is an in-vitro molecular modeling and GPCR screening study for thieno[2,3-b]pyridines, where colchicine is only mentioned as a reference binding site in tubulin, not as the subject of a PK study. |
| popPK | Zaja_2013 | irrelevant | 0 | 0 | The study focuses on environmental contaminants inhibiting P-glycoprotein in fish cells, with colchicine used only as a cytotoxicity modulator/substrate rather than as a subject drug for pharmacokinetic profiling. |
| popPK | Zefirova_2011 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and cytotoxicity of colchicine conjugates, not a pharmacokinetic study. |
| popPK | Zefirova_2017 | irrelevant | 0 | 0 | The study focuses on the synthesis and biological evaluation (cytotoxicity/microtubule effects) of new antimitotic agents related to tubuloclustin, with no pharmacokinetic parameters reported for colchicine. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of multidrug resistance using colchicine as a P-gp substrate/probe, rather than a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | de-Carvalho_2022 | irrelevant | 0 | 0 | The study is an ecotoxicity/developmental toxicity assessment using freshwater snails and does not report pharmacokinetic parameters for colchicine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:20 UTC</sub>
