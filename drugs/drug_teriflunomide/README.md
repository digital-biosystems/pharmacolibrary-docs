<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;teriflunomide&quot;}]"></div>

# teriflunomide

- **generic name:** teriflunomide
- **ATC codes:** `L04AK02`
- **DrugBank:** [DB08880](https://go.drugbank.com/drugs/DB08880) · **PubChem:** [CID 54684141](https://pubchem.ncbi.nlm.nih.gov/compound/54684141)
- **molar mass:** 270.2073 g/mol (C12H9F3N2O2) — DrugBank
- **groups:** approved, investigational

## About

Teriflunomide is an immunosuppressant used to treat relapsing-remitting multiple sclerosis. It is authorised in the European Union and is an approved, widely used oral treatment for this condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3077133](https://www.wikidata.org/wiki/Q3077133) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| teriflunomide | parent | 270.207 | C12H9F3N2O2 | DrugBank | [54684141](https://pubchem.ncbi.nlm.nih.gov/compound/54684141) | Hopkins_2015 |
| leflunomide | metabolite | 270.21 | C12H9F3N2O2 | PubChem | [3899](https://pubchem.ncbi.nlm.nih.gov/compound/3899) | Hopkins_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:38 | 3:16 | 0/1/0 | 1/0/0 | 0/0/0 | 315,549/23,245 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hopkins_2015_reference](drugs/drug_teriflunomide/Teriflunomide_Hopkins2015_reference.md) | — | parent + metabolite (no model) | 0 | Hopkins AM et al., Semiphysiologically Based Pharmacokinet…, CPT: pharmacometrics & syst… (2015) | [10.1002/psp4.46](https://doi.org/10.1002/psp4.46) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Lang_2023_viral_inhibition](drugs/drug_teriflunomide/pd_Lang_2023_viral_inhibition.md) | viral inhibition ← teriflunomide · inhibition effect | — | Lang P et al., Biochemistry and biophysics… (2023) | [10.1016/j.bbrep.2022.101395](https://doi.org/10.1016/j.bbrep.2022.101395) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=teriflunomide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP2C8` inhibitor, `SLCO1B1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DHODH (inhibitor), HMGCR (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yao_2019.pdf` | Yao X et al., A population pharmacokinetic study to a…, European journal of pharmac… (2019) | popPK | 10 | [10.1016/j.ejps.2019.05.020](https://doi.org/10.1016/j.ejps.2019.05.020) | [31154006](https://pubmed.ncbi.nlm.nih.gov/31154006) | The paper reports a population pharmacokinetic model for teriflunomide with covariates, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract or evidence text. |

<sub>queue written 2026-10-07T00:36:01.479960+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hersh_2024 | irrelevant | 0 | 0 | The study analyzes brain atrophy outcomes using MRI data and lists teriflunomide only as a low-efficacy comparator drug; it does not report any pharmacokinetic parameters. |
| popPK | Hopkins_2016 | irrelevant | 0 | 0 | The study focuses on a time-to-event model for drug cessation and pharmacogenetics, not on the pharmacokinetic disposition parameters (CL, V, ka) of teriflunomide. |
| popPK | Kaur_2021 | irrelevant | 0 | 0 | This is a narrative review of the efficacy and safety of DHODH inhibitors in COVID-19; it reports in vitro EC50 values and clinical outcomes but contains no quantitative pharmacokinetic parameters (CL, V, t1/2) for teriflunomide. |
| popPK | Kruger_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ponesimod, not teriflunomide, which is mentioned only as a comparator. |
| popPK | Lang_2023 | irrelevant | 0 | 0 | The study is an in vitro antiviral efficacy evaluation (EC50/CC50) and does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for teriflunomide. |
| popPK | Pitzalis_2021 | irrelevant | 0 | 0 | The study investigates the impact of teriflunomide therapy on vaccine immunogenicity (antibody titers), not the pharmacokinetic disposition parameters (CL, V, etc.) of teriflunomide. |
| popPK | Valenzuela_2022 | irrelevant | 0 | 0 | The study is an exposure-response analysis for ponesimod, with teriflunomide serving only as a comparator, and no teriflunomide PK parameters are reported. |
| popPK | Wiese_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic/predictive analysis focusing on disease response outcomes (DAS28) rather than quantifying pharmacokinetic disposition parameters such as clearance or volume of distribution. |
| popPK | Xiong_2020 | irrelevant | 0 | 0 | The paper focuses on antiviral activity and PK of new DHODH inhibitors (S312/S416) in mice and in vitro; teriflunomide is used only as a comparative agent in antiviral assays without reporting its PK parameters. |
| popPK | Yao_2019 | relevant | 10 | 0 | The paper reports a population pharmacokinetic model for teriflunomide with covariates, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract or evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:36 UTC</sub>
