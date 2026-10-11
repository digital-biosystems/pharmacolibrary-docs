<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;reslizumab&quot;}]"></div>

# reslizumab

- **generic name:** reslizumab
- **ATC codes:** `R03DX08`
- **DrugBank:** [DB06602](https://go.drugbank.com/drugs/DB06602) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Reslizumab is a monoclonal antibody used as an antiasthmatic medicine for asthma. It is authorised in the European Union for asthma and remains in use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7315650](https://www.wikidata.org/wiki/Q7315650) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:12 | 3:38 | 0/0/0 | 0/3/0 | 0/0/0 | 97,440/2,310 | einfracz / qwen3.8-27b | 6 | 0/4 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Gershuny_2023_eosinophils](drugs/drug_reslizumab/pd_Gershuny_2023_eosinophils.md) | eosinophils ← reslizumab · indirect response — drug inhibits the production of eosinophils | — | Gershuny V et al., Considerations for Use of Pharmacodynam…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2760](https://doi.org/10.1002/cpt.2760) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Liddament_2019_IL_5_dependent_cell_proliferation](drugs/drug_reslizumab/pd_Liddament_2019_IL_5_dependent_cell_proliferation.md) | IL-5-dependent cell proliferation biomarker turnover ← reslizumab | — | Liddament M et al., Higher Binding Affinity and in vitro Po…, Allergy, asthma & immunolog… (2019) | [10.4168/aair.2019.11.2.291](https://doi.org/10.4168/aair.2019.11.2.291) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Passarell_2020_ACQ_7](drugs/drug_reslizumab/pd_Passarell_2020_ACQ_7.md) | Asthma Control Questionnaire ← reslizumab · stimulation effect | — | Passarell J et al., Population Pharmacokinetic and Pharmaco…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1609](https://doi.org/10.1002/jcph.1609) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Passarell_2020_AE](drugs/drug_reslizumab/pd_Passarell_2020_AE.md) | muscle disorder adverse events ← reslizumab · stimulation effect | — | Passarell J et al., Population Pharmacokinetic and Pharmaco…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1609](https://doi.org/10.1002/jcph.1609) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Passarell_2020_Eos](drugs/drug_reslizumab/pd_Passarell_2020_Eos.md) | blood eosinophil levels ← reslizumab · inhibition effect | — | Passarell J et al., Population Pharmacokinetic and Pharmaco…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1609](https://doi.org/10.1002/jcph.1609) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Passarell_2020_FEV1](drugs/drug_reslizumab/pd_Passarell_2020_FEV1.md) | forced expiratory volume in 1 second ← reslizumab · stimulation effect | — | Passarell J et al., Population Pharmacokinetic and Pharmaco…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1609](https://doi.org/10.1002/jcph.1609) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=reslizumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL5 (regulator), IL5 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Passarell_2020.pdf` | Passarell J et al., Population Pharmacokinetic and Pharmaco…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1002/jcph.1609](https://doi.org/10.1002/jcph.1609) | [32333684](https://pubmed.ncbi.nlm.nih.gov/32333684) | The study is a population PK analysis of reslizumab, but the specific numeric parameter values are not provided in the extracted evidence, which contains only the abstract and methods description. |

<sub>queue written 2026-10-07T22:12:25.412166+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gershuny_2023 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic (PD) biomarkers (eosinophils) and modeling, not on quantitative pharmacokinetic (PK) disposition parameters like clearance or volume for reslizumab. |
| popPK | Kumar_2024 | irrelevant | 0 | 0 | The paper develops a population PBPK model for 46 monoclonal antibodies in general but does not report specific quantitative pharmacokinetic parameters for reslizumab. |
| popPK | Matera_2017 | irrelevant | 1 | 0 | The paper is a review of benralizumab's pharmacokinetics and only mentions reslizumab as a comparator, containing no quantitative PK data for reslizumab. |
| popPK | Matera_2018 | irrelevant | 4 | 0 | The text is a review/expert opinion describing the PK/PD profile but contains no specific quantitative disposition parameter values (CL, V, half-life, etc.) for reslizumab. |
| popPK | Passarell_2020 | relevant | 10 | 0 | The study is a population PK analysis of reslizumab, but the specific numeric parameter values are not provided in the extracted evidence, which contains only the abstract and methods description. |
| popPK | Singh_2022 | irrelevant | 0 | 0 | The paper reports PK parameters for GSK3511294 (a different anti-IL-5 mAb), not reslizumab; reslizumab is only mentioned as a comparator. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of tralokinumab, not reslizumab; reslizumab is only mentioned as a comparator in the introduction. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study focuses on the population PK/PD modeling of dupilumab, not reslizumab. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
