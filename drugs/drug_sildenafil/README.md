<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;sildenafil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sildenafil_Cochiusden2020_reference&quot;,&quot;label&quot;:&quot;Cochius-den_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sildenafil/Sildenafil_Cochiusden2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sildenafil

- **generic name:** sildenafil
- **ATC codes:** `G04BE03`
- **DrugBank:** [DB00203](https://go.drugbank.com/drugs/DB00203) · **PubChem:** [CID 5212](https://pubchem.ncbi.nlm.nih.gov/compound/5212)
- **molar mass:** 474.576 g/mol (C22H30N6O4S) — DrugBank
- **groups:** approved, investigational

## About

Sildenafil is a medication used to treat erectile dysfunction and pulmonary arterial hypertension. It is widely used and authorised in the European Union, available in products for both erectile dysfunction and pulmonary hypertension.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q191521](https://www.wikidata.org/wiki/Q191521) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sildenafil | parent | 474.576 | C22H30N6O4S | DrugBank | [5212](https://pubchem.ncbi.nlm.nih.gov/compound/5212) | Olguín_2017, Rhee_2022, Russo_2019, Yata_2026 |
| desmethylsildenafil | metabolite | 460.55 | — | the paper | — | Russo_2019 |
| N-desmethyl sildenafil | metabolite | 460.6 | — | the paper | — | Rhee_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:09 | 6:14 | 2/3/3 | 0/0/0 | 0/0/0 | 339,245/50,924 | einfracz / qwen3.8-27b | 9 | 3/6 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Cochius-den_2020_reference](drugs/drug_sildenafil/Sildenafil_Cochiusden2020_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Cochius-den Otter SCM et al., Pharmacokinetic modeling of intravenous…, European journal of clinica… (2020) | [10.1007/s00228-019-02767-1](https://doi.org/10.1007/s00228-019-02767-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Russo_2019_final](drugs/drug_sildenafil/Sildenafil_Russo2019_final.md) | held back | 1-compartment, oral | 5 | Russo FM et al., Pregnancy affects the pharmacokinetics…, Xenobiotica; the fate of fo… (2019) | [10.1080/00498254.2017.1422217](https://doi.org/10.1080/00498254.2017.1422217) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C2_reference failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Rhee_2022_reference](drugs/drug_sildenafil/Sildenafil_Rhee2022_reference.md) | — | parent + metabolite (no model) | 3 (+3 cov.) | Rhee SJ et al., Population pharmacokinetic analysis of…, Scientific reports (2022) | [10.1038/s41598-022-11038-6](https://doi.org/10.1038/s41598-022-11038-6) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Russo_2019_final_final_model_pregnant_rabbits_rse](drugs/drug_sildenafil/Sildenafil_Russo2019_final_final_model_pregnant_rabbits_rse.md) | — | parent + metabolite (no model) | 2 | Russo FM et al., Pregnancy affects the pharmacokinetics…, Xenobiotica; the fate of fo… (2019) | [10.1080/00498254.2017.1422217](https://doi.org/10.1080/00498254.2017.1422217) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Yata_2026_reference](drugs/drug_sildenafil/Sildenafil_Yata2026_reference.md) | — | 1-compartment (no model) | 8 | Yata M et al., Population Pharmacokinetics of Sildenaf…, Journal of veterinary pharm… (2026) | [10.1111/jvp.70057](https://doi.org/10.1111/jvp.70057) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [De_2021_reference](drugs/drug_sildenafil/Sildenafil_De2021_reference.md) | — | 1-compartment (no model) | 0 | De Bie FR et al., Pharmacokinetics and pharmacodynamics o…, Biomedicine & pharmacothera… (2021) | [10.1016/j.biopha.2021.112161](https://doi.org/10.1016/j.biopha.2021.112161) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Milligan_2002_reference](drugs/drug_sildenafil/Sildenafil_Milligan2002_reference.md) | — | 1-compartment (no model) | 0 | Milligan PA et al., A population pharmacokinetic analysis o…, British journal of clinical… (2002) | [10.1046/j.0306-5251.2001.00032.x](https://doi.org/10.1046/j.0306-5251.2001.00032.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Olguín_2017_reference](drugs/drug_sildenafil/Sildenafil_Olgun2017_reference.md) | — | 1-compartment (no model) | 1 | Olguín HJ et al., Pharmacokinetics of sildenafil in child…, World journal of pediatrics… (2017) | [10.1007/s12519-017-0043-4](https://doi.org/10.1007/s12519-017-0043-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sildenafil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor/substrate, `CYP2C9` inhibitor/substrate, `CYP2D6` substrate, `CYP2E1` inhibitor/substrate, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC4` inhibitor | DrugBank actor |
| excretion | liver | `ABCC4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC10 (inhibitor), ABCC5 (inhibitor), CD274 (downregulator), ODC1 (downregulator), PDE5A (inhibitor), PDE6G (inhibitor), PDE6H (inhibitor), SERPING1 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 88 matched, 20 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 8  ·  extracted 2  ·  needs_review 3  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gonzalez_2019.pdf` | Gonzalez D et al., Population pharmacokinetics of sildenaf…, British journal of clinical… (2019) | popPK | 10 | [10.1111/bcp.14111](https://doi.org/10.1111/bcp.14111) | [31475367](https://pubmed.ncbi.nlm.nih.gov/31475367) | The paper describes a population PK model for sildenafil in premature infants, but specific numeric parameter estimates (CL, V, etc.) are not present in the provided evidence, only qualitative model descriptions and qualitative results. |
| `Milligan_2002.pdf` | Milligan PA et al., A population pharmacokinetic analysis o…, British journal of clinical… (2002) | popPK | 10 | [10.1046/j.0306-5251.2001.00032.x](https://doi.org/10.1046/j.0306-5251.2001.00032.x) | [11879259](https://pubmed.ncbi.nlm.nih.gov/11879259) | The paper is a population pharmacokinetic study of sildenafil in humans, and all key quantitative parameters (CL/F, V/F, ka) are explicitly provided in the results text. |
| `Olguín_2017.pdf` | Olguín HJ et al., Pharmacokinetics of sildenafil in child…, World journal of pediatrics… (2017) | popPK | 10 | [10.1007/s12519-017-0043-4](https://doi.org/10.1007/s12519-017-0043-4) | [28791664](https://pubmed.ncbi.nlm.nih.gov/28791664) | The study reports explicit quantitative pharmacokinetic parameters (CL/F, Vd/F, ka, t1/2, AUC) for sildenafil in children with pulmonary arterial hypertension. |

<sub>queue written 2026-10-07T09:04:33.399300+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bender_2009 | irrelevant | 1 | 0 | The study models the pharmacokinetics of pregabalin to assess a drug-drug interaction with sildenafil; no population PK parameters (CL, V, etc.) for sildenafil itself are reported, only its effect on pregabalin clearance. |
| popPK | Cochius-den_2020 | relevant | 10 | 2 | The paper presents a population PK model for sildenafil in newborns with CDH, but the specific numeric parameter estimates (CL, V, Q, IIV) are located in Table 1, which is not included in the provided evidence. |
| popPK | Dresser_2000 | irrelevant | 0 | 0 | This is a general review of CYP3A4 drug interactions that mentions sildenafil only as an example of a drug causing hypotension when co-administered with inhibitors, without reporting any specific pharmacokinetic parameter values for sildenafil. |
| popPK | Ehnes_2026 | irrelevant | 0 | 0 | The study investigates the effect of sildenafil on pulmonary diffusing capacity (DLCO) as a physiological response, not on its pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Gonzalez_2019 | relevant | 10 | 1 | The paper describes a population PK model for sildenafil in premature infants, but specific numeric parameter estimates (CL, V, etc.) are not present in the provided evidence, only qualitative model descriptions and qualitative results. |
| popPK | Khan_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study on myometrial relaxation and does not report pharmacokinetic parameters. |
| popPK | Kumar_2020 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of sildenafil for acute kidney injury prevention, reporting clinical outcomes and biomarkers rather than quantitative pharmacokinetic parameters (CL, V, etc.) for sildenafil. |
| popPK | Lee_2023 | irrelevant | 1 | 1 | The study focuses on a novel analog (malonyl-sildenafil) and lacks any quantitative PK parameters (CL, V, etc.) for sildenafil itself. |
| popPK | Läer_2019 | irrelevant | 4 | 0 | The paper is a review or methodological guide using sildenafil as a conceptual example for PBPK simulation in pediatrics, without providing original quantitative PK parameter values in the evidence. |
| popPK | Medina_2000 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on isolated blood vessels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Mo_2004 | irrelevant | 0 | 0 | The study is a mechanistic/cellular signaling analysis in rat platelets using sildenafil as a pharmacological tool to modulate PDE-5 activity, not a pharmacokinetic study of sildenafil disposition. |
| popPK | Neto_2025 | irrelevant | 0 | 0 | The study uses sildenafil as a diagnostic vasodilator to assess vascular reactivity in rat arteries, not to measure sildenafil pharmacokinetic parameters. |
| popPK | Soto_2018 | irrelevant | 0 | 0 | The study is a taste/aversion assessment of APIs, not a pharmacokinetic study, and reports no disposition parameters for sildenafil. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:06 UTC</sub>
