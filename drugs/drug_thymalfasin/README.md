<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;thymalfasin&quot;}]"></div>

# thymalfasin

- **generic name:** thymalfasin
- **ATC codes:** `L03AX25`
- **DrugBank:** [DB04900](https://go.drugbank.com/drugs/DB04900) · **PubChem:** not captured
- **groups:** investigational

## About

It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20817234](https://www.wikidata.org/wiki/Q20817234) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:23 | 6:57 | 0/0/0 | 1/2/0 | 0/0/0 | 185,702/2,414 | einfracz / qwen3.8-27b | 13 | 2/2 | 13/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hadden_2003_CD45RA_T_cells](drugs/drug_thymalfasin/pd_Hadden_2003_CD45RA_T_cells.md) | CD(45)RA(+) 'naïve' T cells ← thymosin alpha(1) · stimulation effect | — | Hadden JW, Immunodeficiency and cancer: prospects…, International immunopharmac… (2003) | [10.1016/S1567-5769(03)00060-2](https://doi.org/10.1016/S1567-5769(03)00060-2) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Costantini_2020_pulmonary_aspergillosis_risk_immune_homeostasis](drugs/drug_thymalfasin/pd_Costantini_2020_pulmonary_aspergillosis_risk_immune_homeosta.md) | pulmonary aspergillosis risk / immune homeostasis ← thymalfasin · stimulation effect | — | Costantini C et al., Covid-19-Associated Pulmonary Aspergill…, Vaccines (2020) | [10.3390/vaccines8040713](https://doi.org/10.3390/vaccines8040713) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Sjogren_2004_immune_system_parameters_T_cell_differentiation_and_maturation](drugs/drug_thymalfasin/pd_Sjogren_2004_immune_system_parameters_T_cell_differentiation.md) | immune system parameters / T-cell differentiation and maturation ← thymalfasin · stimulation effect | — | Sjogren MH, Thymalfasin: an immune system enhancer…, Journal of gastroenterology… (2004) | [10.1111/j.1440-1746.2004.03635.x](https://doi.org/10.1111/j.1440-1746.2004.03635.x) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 78 matched, 52 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amer_2025 | irrelevant | 0 | 0 | The paper is a general review on peptide delivery via oral mucosa and does not report specific pharmacokinetic parameters for thymalfasin. |
| PGx | Baek_2007 | not_relevant | 0 | 0 | The paper is a case report on the clinical efficacy of Thymosin Alpha-1 in combination therapy and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Carraro_2012 | irrelevant | 0 | 0 | The study evaluates the immunogenicity of an influenza vaccine with Thymosin-alpha 1 and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Garaci_2007 | not_relevant | 0 | 0 | The text describes the general efficacy and mechanism of action of thymosin alpha 1 in cancer and hepatitis but does not report any pharmacogenomic studies linking gene variants to PK or PD parameters. |
| popPK | Gastine_2020 | irrelevant | 0 | 0 | The study models SARS-CoV-2 viral dynamics and clearance, not the pharmacokinetics of thymalfasin. |
| popPK | Gastine_2021 | irrelevant | 0 | 0 | The paper is a meta-analysis of SARS-CoV-2 viral dynamics and does not contain any pharmacokinetic data for the drug thymalfasin. |
| popPK | Islam_2022 | irrelevant | 0 | 0 | The paper is a review on immune system rejuvenation against coronavirus and does not contain pharmacokinetic data for thymalfasin. |
| popPK | Klimentzou_2006 | irrelevant | 0 | 0 | The study focuses on the development and immunochemical evaluation of antibodies against prothymosin alpha, not on the pharmacokinetics of thymalfasin. |
| PGx | Poo_2008 | not_relevant | 0 | 0 | The paper evaluates the clinical efficacy of thymalfasin in HCV patients without investigating any pharmacogenomic influences on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Rustgi_2005 | not_relevant | 0 | 0 | The text describes clinical efficacy and treatment outcomes for thymalfasin in hepatitis C patients but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Rustgi_2007 | not_relevant | 0 | 0 | The paper is a clinical review of thymalfasin efficacy in Hepatitis C and contains no data on genetic variants or pharmacogenomics. |
| popPK | Xu_2015 | irrelevant | 0 | 0 | The paper focuses on the immunogenicity of a vaccine in pigs, using thymosin α-1 as an adjuvant, and does not report any pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
