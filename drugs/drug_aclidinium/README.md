<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;Aclidinium&quot;}]"></div>

# Aclidinium

- **generic name:** Aclidinium
- **ATC codes:** `R03AL05`, `R03BB05`
- **DrugBank:** [DB08897](https://go.drugbank.com/drugs/DB08897) · **PubChem:** not captured
- **groups:** approved

## About

Aclidinium is an inhaled anticholinergic medicine used to treat obstructive airway diseases such as chronic obstructive pulmonary disease. It is an approved drug, available alone and in combination inhalers with adrenergic agents.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27888207](https://www.wikidata.org/wiki/Q27888207) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:30 | 1:51 | 0/0/0 | 2/0/0 | 0/0/0 | 55,256/1,745 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gong_2022_trough_FEV1](drugs/drug_aclidinium/pd_Gong_2022_trough_FEV1.md) | change from baseline in trough FEV1 ← formoterol/aclidinium fixed-dose combination (treatment arm) · direct Emax (saturable) effect | — | Gong Y et al., Quantitative analysis of efficacy and s…, Therapeutic advances in res… (2022) | [10.1177/17534666211066068](https://doi.org/10.1177/17534666211066068) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Llanos-Paez_2023_FEV1](drugs/drug_aclidinium/pd_Llanos_Paez_2023_FEV1.md) | Morning trough FEV1 ← aclidinium · direct sigmoid Emax (Hill) effect | — | Llanos-Paez C et al., Joint longitudinal model-based meta-ana…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09853-z](https://doi.org/10.1007/s10928-023-09853-z) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aclidinium) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` substrate | DrugBank actor |
| metabolism | liver | `BCHE` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cazzola_2014.pdf` | Cazzola M et al., Pharmacological characterization of the…, European journal of pharmac… (2014) | pd | 4 | [10.1016/j.ejphar.2014.10.025](https://doi.org/10.1016/j.ejphar.2014.10.025) | [25446566](https://www.ncbi.nlm.nih.gov/pubmed/25446566) | metadata signals extractable PD data (Emax) |
| `Cazzola_2015.pdf` | Cazzola M et al., Searching for the synergistic effect be…, Respiratory medicine (2015) | pd | 4 | [10.1016/j.rmed.2015.08.005](https://doi.org/10.1016/j.rmed.2015.08.005) | [26303336](https://www.ncbi.nlm.nih.gov/pubmed/26303336) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T13:30:25.415071+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Albertí_2011 | not_relevant | 3 | 5 | Identifies CYP3A4/2D6 as enzymes metabolizing aclidinium in vitro, but no gene variant/genotype effect on a PK/PD parameter is reported. |
| popPK | Babu_2017 | irrelevant | 0 | 0 | This is a review of umeclidinium, a different drug, with no quantitative PK parameters for aclidinium. |
| popPK | Cazzola_2014 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| popPK | Cazzola_2015 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| popPK | Gong_2022 | irrelevant | 0 | 0 | This is a pharmacodynamic (Emax/efficacy-loss) meta-analysis of FEV1 for LABA/LAMA combinations; no PK disposition parameters (CL, V, ka, half-life) for aclidinium are reported. |
| popPK | Llanos-Paez_2023 | irrelevant | 0 | 0 | This is an MBMA of FEV1/exacerbation efficacy in COPD, not a PK study; aclidinium appears only as a comparator with efficacy (ED50/Effref) parameters, no disposition parameters, and new drug estimates are in supplementary material. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
