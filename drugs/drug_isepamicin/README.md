<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01G&quot;,&quot;href&quot;:&quot;atc/J01G.md&quot;},{&quot;label&quot;:&quot;isepamicin&quot;}]"></div>

# isepamicin

- **generic name:** isepamicin
- **ATC codes:** `J01GB11`
- **DrugBank:** [DB13540](https://go.drugbank.com/drugs/DB13540) · **PubChem:** not captured
- **molar mass:** 569.6031 g/mol (C22H43N5O12) — DrugBank
- **groups:** experimental

## About

Isepamicin is an aminoglycoside antibacterial used to treat bacterial infections. It is not an approved medicine today; it is considered experimental and has no European Union authorisation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q554818](https://www.wikidata.org/wiki/Q554818) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| isepamicin | parent | 569.603 | C22H43N5O12 | DrugBank | — | Barr_1995, Fauvelle_2001 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:35 | 6:09 | 0/1/1 | 0/0/0 | 0/0/0 | 29,594/34,037 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Fauvelle_2001_reference](drugs/drug_isepamicin/Isepamicin_Fauvelle2001_reference.md) | — | 1-compartment (no model) | 1 | Fauvelle F et al., Comparison of two methods to obtain a d…, Fundamental & clinical phar… (2001) | [10.1046/j.1472-8206.2001.00020.x](https://doi.org/10.1046/j.1472-8206.2001.00020.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Barr_1995_reference](drugs/drug_isepamicin/Isepamicin_Barr1995_reference.md) | — | 1-compartment (no model) | 2 | Barr WH et al., Pharmacokinetics of isepamicin, Journal of chemotherapy (Fl… (1995) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barr_1995.pdf` | Barr WH et al., Pharmacokinetics of isepamicin, Journal of chemotherapy (Fl… (1995) | popPK | 10 | not captured | [8622111](https://pubmed.ncbi.nlm.nih.gov/8622111) | The text provides specific quantitative PK parameters (CL, Vss, half-lives) and a compartmental model description for isepamicin in humans. |
| `Tod_1996.pdf` | Tod M et al., Population pharmacokinetic study of ise…, Antimicrobial agents and ch… (1996) | popPK | 10 | [10.1128/AAC.40.4.983](https://doi.org/10.1128/AAC.40.4.983) | [8849264](https://pubmed.ncbi.nlm.nih.gov/8849264) | Study reports population PK for isepamicin with covariates, but specific mean numeric values for CL, V, etc., are not explicitly listed in the provided text (only relative changes and simulation ranges). |
| `Tod_1999.pdf` | Tod M et al., Isepamicin in intensive care unit patie…, The Journal of antimicrobia… (1999) | popPK | 10 | [10.1093/jac/44.1.99](https://doi.org/10.1093/jac/44.1.99) | [10459816](https://pubmed.ncbi.nlm.nih.gov/10459816) | The study describes a population PK model and reports peak levels and model structure, but the specific numeric parameter estimates (CL, V, Q, etc.) are not present in the provided abstract text. |
| `Uematsu_1993.pdf` | Uematsu T, Population pharmacokinetic analysis of…, International journal of cl… (1993) | popPK | 10 | not captured | [8314363](https://pubmed.ncbi.nlm.nih.gov/8314363) | The paper describes a population PK model for isepamicin in humans, but the specific numeric parameter values (CL, V, Q) are not present in the provided abstract text. |
| `Yombi_2005.pdf` | Yombi JC et al., Key pharmacokinetic parameters of isepa…, Journal of chemotherapy (Fl… (2005) | popPK | 10 | [10.1179/joc.2005.17.5.521](https://doi.org/10.1179/joc.2005.17.5.521) | [16323441](https://pubmed.ncbi.nlm.nih.gov/16323441) | The abstract provides explicit numeric values for volume of distribution (Vd), clearance, Cmax, and AUC for isepamicin in human patients. |
| `Fauvelle_2001.pdf` | Fauvelle F et al., Comparison of two methods to obtain a d…, Fundamental & clinical phar… (2001) | popPK | 8 | [10.1046/j.1472-8206.2001.00020.x](https://doi.org/10.1046/j.1472-8206.2001.00020.x) | [11468025](https://pubmed.ncbi.nlm.nih.gov/11468025) | The study reports quantitative disposition parameters (volume of distribution) for isepamicin in humans, though specific clearance values are not explicitly listed in the evidence. |
| `Okubo_2002.pdf` | Okubo T et al., [Antibacterial activities and PK/PD par…, The Japanese journal of ant… (2002) | pd | 5 | not captured | [12532635](https://www.ncbi.nlm.nih.gov/pubmed/12532635) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-10-07T11:30:07.682857+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blaser_1991 | irrelevant | 0 | 0 | This is an in-vitro efficacy study simulating PK profiles rather than a study measuring pharmacokinetic disposition parameters for isepamicin. |
| PGx | Mainardi_1994 | not_relevant | 0 | 0 | The paper reports bacterial resistance mechanisms and animal model efficacy, not human pharmacogenomic effects on isepamicin PK/PD. |
| popPK | Okubo_2002 | irrelevant | 2 | 0 | The study is primarily antibacterial activity (MICs) with PK/PD indices (Cmax/MIC, AUC/MIC) used for efficacy estimation, but it does not report underlying quantitative PK disposition parameters (CL, V, ka, t1/2) for isepamicin, and the specific numeric PK values are not present in the provided text. |
| popPK | Tod_1996 | relevant | 10 | 4 | Study reports population PK for isepamicin with covariates, but specific mean numeric values for CL, V, etc., are not explicitly listed in the provided text (only relative changes and simulation ranges). |
| popPK | Tod_1999 | relevant | 10 | 1 | The study describes a population PK model and reports peak levels and model structure, but the specific numeric parameter estimates (CL, V, Q, etc.) are not present in the provided abstract text. |
| popPK | Uematsu_1993 | relevant | 10 | 2 | The paper describes a population PK model for isepamicin in humans, but the specific numeric parameter values (CL, V, Q) are not present in the provided abstract text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:35 UTC</sub>
