<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;letrozole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Letrozole_Puszkiel2024_reference&quot;,&quot;label&quot;:&quot;Puszkiel_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_letrozole/Letrozole_Puszkiel2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# letrozole

- **generic name:** letrozole
- **ATC codes:** `L02BG04`
- **DrugBank:** [DB01006](https://go.drugbank.com/drugs/DB01006) · **PubChem:** [CID 3902](https://pubchem.ncbi.nlm.nih.gov/compound/3902)
- **molar mass:** 285.3027 g/mol (C17H11N5) — DrugBank
- **groups:** approved, investigational

## About

Letrozole is an aromatase inhibitor used to treat breast cancer, including invasive ductal carcinoma and low-grade serous carcinoma. It is an approved medicine and is widely used as endocrine therapy for cancer.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q194974](https://www.wikidata.org/wiki/Q194974) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| letrozole | parent | 285.303 | C17H11N5 | DrugBank | [3902](https://pubchem.ncbi.nlm.nih.gov/compound/3902) | Arora_2021, Puszkiel_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:18 | 2:00 | 1/1/2 | 0/0/0 | 0/0/0 | 164,457/10,327 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Puszkiel_2024_reference](drugs/drug_letrozole/Letrozole_Puszkiel2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+3 cov.) | Puszkiel A et al., Identification of non-adherence to adju…, European journal of pharmac… (2024) | [10.1016/j.ejps.2024.106809](https://doi.org/10.1016/j.ejps.2024.106809) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Arora_2021_females](drugs/drug_letrozole/Letrozole_Arora2021_females.md) | — | 1-compartment (no model) | 4 | Arora P et al., Gender-based differences in brain and p…, PloS one (2021) | [10.1371/journal.pone.0248579](https://doi.org/10.1371/journal.pone.0248579) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Arora_2021_males](drugs/drug_letrozole/Letrozole_Arora2021_males.md) | — | 1-compartment (no model) | 4 | Arora P et al., Gender-based differences in brain and p…, PloS one (2021) | [10.1371/journal.pone.0248579](https://doi.org/10.1371/journal.pone.0248579) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Tanii_2011_reference](drugs/drug_letrozole/Letrozole_Tanii2011_reference.md) | — | 1-compartment (no model) | 0 | Tanii H et al., Population pharmacokinetic analysis of…, European journal of clinica… (2011) | [10.1007/s00228-011-1042-3](https://doi.org/10.1007/s00228-011-1042-3) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=letrozole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` inhibitor/substrate, `CYP2C19` inhibitor, `CYP3A4` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | adipose tissue | `CYP19A1` inhibitor/target | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor/target | DrugBank actor |
| — | testis | `CYP19A1` inhibitor/target | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 17 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 4  ·  extracted 1  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jin_2012.pdf` | Jin SJ et al., The pharmacokinetics of letrozole: asso…, International journal of cl… (2012) | popPK | 10 | [10.5414/CP201709](https://doi.org/10.5414/CP201709) | [22735458](https://pubmed.ncbi.nlm.nih.gov/22735458) | The study is a population PK analysis of letrozole in humans, but specific numeric parameter values (CL, V, etc.) are not provided in the text evidence. |
| `Kivrak_2021.pdf` | Kivrak MB et al., The pharmacokinetics of letrozole and i…, Theriogenology (2021) | popPK | 10 | [10.1016/j.theriogenology.2021.09.033](https://doi.org/10.1016/j.theriogenology.2021.09.033) | [34628085](https://pubmed.ncbi.nlm.nih.gov/34628085) | The study reports quantitative PK parameters (clearance, volume, half-life) for letrozole in ewes. |
| `Kivrak_2024.pdf` | Kivrak MB et al., Pharmacokinetics of letrozole and effec…, Journal of veterinary pharm… (2024) | popPK | 10 | [10.1111/jvp.13414](https://doi.org/10.1111/jvp.13414) | [37920137](https://pubmed.ncbi.nlm.nih.gov/37920137) | The study reports quantitative pharmacokinetic parameters (half-life, total body clearance) for letrozole in ewes, with specific numeric values provided in the abstract. |
| `Tanii_2011.pdf` | Tanii H et al., Population pharmacokinetic analysis of…, European journal of clinica… (2011) | popPK | 10 | [10.1007/s00228-011-1042-3](https://doi.org/10.1007/s00228-011-1042-3) | [21494765](https://pubmed.ncbi.nlm.nih.gov/21494765) | The paper is a population pharmacokinetic study reporting specific quantitative values for apparent clearance (CL/F) and distribution volume (Vd/F) with covariate effects. |
| `Xu_2021.pdf` | Xu Y et al., Off-label use of letrozole in Chinese s…, British journal of clinical… (2021) | popPK | 5 | [10.1111/bcp.14775](https://doi.org/10.1111/bcp.14775) | [33576060](https://pubmed.ncbi.nlm.nih.gov/33576060) | Study includes exposure-response analysis with letrozole concentrations in human boys, but no PK parameter values (CL, V, t1/2) are provided in the evidence. |

<sub>queue written 2026-10-06T22:17:03.114322+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Attardi_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of aromatase substrate specificity where letrozole is used only as a non-steroidal aromatase inhibitor control, with no pharmacokinetic parameters reported for letrozole. |
| popPK | Fernández-Guasti_2022 | irrelevant | 0 | 0 | The study is a neuroanatomical investigation of androgen receptor density in rats where letrozole is used only as a prenatal tool to induce behavioral changes, not to characterize pharmacokinetic parameters. |
| popPK | Fu_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of palbociclib's interaction with ABCB1 transporters, where letrozole is only mentioned as a standard therapy comparator in the introduction. |
| popPK | Jin_2012 | relevant | 10 | 0 | The study is a population PK analysis of letrozole in humans, but specific numeric parameter values (CL, V, etc.) are not provided in the text evidence. |
| popPK | Lazarte_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of polyisoprenylated cysteinyl amide inhibitors (PCAIs) in letrozole-resistant breast cancer cells, containing no pharmacokinetic or disposition parameters for letrozole. |
| popPK | Lu_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ribociclib, with letrozole mentioned only as a concomitant aromatase inhibitor used in combination therapy. |
| popPK | Park_2017 | irrelevant | 0 | 0 | The paper is a clinical pharmacogenomic simulation study focused on treatment efficacy (survival hazard ratios) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Xu_2021 | relevant | 5 | 0 | Study includes exposure-response analysis with letrozole concentrations in human boys, but no PK parameter values (CL, V, t1/2) are provided in the evidence. |
| popPK | Zhao_2016 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro binding/inhibitory activity of novel compounds, with no pharmacokinetic data for letrozole. |
| popPK | Zheng_2021 | irrelevant | 0 | 0 | This is an exposure-response analysis for palbociclib, where letrozole is only a co-administered comparator drug and no pharmacokinetic parameters for letrozole are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:17 UTC</sub>
