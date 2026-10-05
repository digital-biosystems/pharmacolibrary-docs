<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;alogliptin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alogliptin_Dudkowski2017_final_parameter_estimate&quot;,&quot;label&quot;:&quot;Dudkowski_2017_final_parameter_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alogliptin/Alogliptin_Dudkowski2017_final_parameter_estimate.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# alogliptin

- **generic name:** alogliptin
- **ATC codes:** `A10BD09`, `A10BD13`, `A10BH04`
- **DrugBank:** [DB06203](https://go.drugbank.com/drugs/DB06203) · **PubChem:** [CID 11450633](https://pubchem.ncbi.nlm.nih.gov/compound/11450633)
- **molar mass:** 339.3916 g/mol (C18H21N5O2) — DrugBank
- **groups:** approved, investigational

## About

Alogliptin is a DPP-4 inhibitor used to lower blood glucose in adults with type 2 diabetes. It is authorised in the European Union and used as an oral anti-diabetic medicine, including in fixed-dose combinations with other glucose-lowering drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4734170](https://www.wikidata.org/wiki/Q4734170) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| alogliptin | parent | 339.392 | C18H21N5O2 | DrugBank | [11450633](https://pubchem.ncbi.nlm.nih.gov/compound/11450633) | Dudkowski_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 22:18 | 9:01 | 1/0/4 | 3/0/0 | 0/0/0 | 216,848/27,308 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.778). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Dudkowski_2017_final_parameter_estimate](drugs/drug_alogliptin/Alogliptin_Dudkowski2017_final_parameter_estimate.md) | ▶ model + simulator | 2-compartment, oral | 5 | Dudkowski C et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2017) | [10.1007/s00228-016-2175-1](https://doi.org/10.1007/s00228-016-2175-1) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.643). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q19 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Dudkowski_2017_14_to_18_years](drugs/drug_alogliptin/Alogliptin_Dudkowski2017_14_to_18_years.md) | — | 2-compartment (no model) | 8 | Dudkowski C et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2017) | [10.1007/s00228-016-2175-1](https://doi.org/10.1007/s00228-016-2175-1) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.643). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q19 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Dudkowski_2017_adults](drugs/drug_alogliptin/Alogliptin_Dudkowski2017_adults.md) | — | 2-compartment (no model) | 8 | Dudkowski C et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2017) | [10.1007/s00228-016-2175-1](https://doi.org/10.1007/s00228-016-2175-1) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q19 — no SI value to build from</sub><br><sub>blocking: C2_base_Q44 failed (ratio 1.153)</sub><br><sub>route_to: `human_review`</sub> | [Dudkowski_2017_alo_12_5_mg](drugs/drug_alogliptin/Alogliptin_Dudkowski2017_alo_12_5_mg.md) | — | 2-compartment (no model) | 9 | Dudkowski C et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2017) | [10.1007/s00228-016-2175-1](https://doi.org/10.1007/s00228-016-2175-1) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q19 — no SI value to build from</sub><br><sub>blocking: C2_base_Q44 failed (ratio 1.1822)</sub><br><sub>route_to: `human_review`</sub> | [Dudkowski_2017_alo_25_mg](drugs/drug_alogliptin/Alogliptin_Dudkowski2017_alo_25_mg.md) | — | 2-compartment (no model) | 9 | Dudkowski C et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2017) | [10.1007/s00228-016-2175-1](https://doi.org/10.1007/s00228-016-2175-1) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Dudkowski_2017_DPP_4_inhibition](drugs/drug_alogliptin/pd_Dudkowski_2017_DPP_4_inhibition.md) | DPP-4 inhibition ← alogliptin · direct sigmoid Emax (Hill) effect | — | Dudkowski C et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2017) | [10.1007/s00228-016-2175-1](https://doi.org/10.1007/s00228-016-2175-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Langford_2018_HbA1c](drugs/drug_alogliptin/pd_Langford_2018_HbA1c.md) | HbA1c ← alogliptin · direct Emax (saturable) effect | — | Langford O et al., Methods for meta-analysis of pharmacody…, Statistical methods in medi… (2018) | [10.1177/0962280216637093](https://doi.org/10.1177/0962280216637093) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Lee_2008_DPP_4](drugs/drug_alogliptin/pd_Lee_2008_DPP_4.md) | plasma DPP-4 inhibition ← alogliptin · direct Emax (saturable) effect | — | Lee B et al., Pharmacokinetic, pharmacodynamic, and e…, European journal of pharmac… (2008) | [10.1016/j.ejphar.2008.04.047](https://doi.org/10.1016/j.ejphar.2008.04.047) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=alogliptin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DPP4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 12  ·  **relevant:** 1
- **records:** 5  ·  extracted 1  ·  needs_review 4  ·  rejected 0  ·  stale 5
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Naik_2016.pdf` | Naik H et al., Application of pharmacometric approache…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.12853](https://doi.org/10.1111/bcp.12853) | [26617339](https://pubmed.ncbi.nlm.nih.gov/26617339) | The paper describes a population PK model for alogliptin, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided abstract text, only relative changes and qualitative descriptions. |
| `Covington_2008.pdf` | Covington P et al., Pharmacokinetic, pharmacodynamic, and t…, Clinical therapeutics (2008) | popPK | 8 | [10.1016/j.clinthera.2008.03.004](https://doi.org/10.1016/j.clinthera.2008.03.004) | [18405788](https://pubmed.ncbi.nlm.nih.gov/18405788) | The study reports PK parameters for alogliptin in humans, including half-life (12.5-21.1 h) and renal excretion fraction, but lacks specific values for clearance (CL) or volume of distribution (V). |
| `Liu_2016.pdf` | Liu D et al., Quantitative prediction of human pharma…, European journal of pharmac… (2016) | pd | 5 | [10.1016/j.ejps.2016.04.020](https://doi.org/10.1016/j.ejps.2016.04.020) | [27108678](https://www.ncbi.nlm.nih.gov/pubmed/27108678) | metadata signals extractable PD data (PK/PD) |
| `Chen_2015.pdf` | Chen XW et al., An update on the clinical pharmacology…, Clinical and experimental p… (2015) | pgx | 7 | [10.1111/1440-1681.12469](https://doi.org/10.1111/1440-1681.12469) | [26218204](https://www.ncbi.nlm.nih.gov/pubmed/26218204) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Golightly_2012.pdf` | Golightly LK et al., Comparative clinical pharmacokinetics o…, Clinical pharmacokinetics (2012) | pgx | 7 | [10.1007/BF03261927](https://doi.org/10.1007/BF03261927) | [22686547](https://www.ncbi.nlm.nih.gov/pubmed/22686547) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-04T22:09:52.565379+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chen_2015 | not_relevant | 0 | 0 | The paper is a general clinical pharmacology review of alogliptin and does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Covington_2008 | relevant | 8 | 4 | The study reports PK parameters for alogliptin in humans, including half-life (12.5-21.1 h) and renal excretion fraction, but lacks specific values for clearance (CL) or volume of distribution (V). |
| popPK | Ferreira_2021 | irrelevant | 0 | 0 | The paper is a clinical outcome analysis of the EXAMINE trial focusing on body weight changes and cardiovascular risk, not a pharmacokinetic study, and contains no PK parameters for alogliptin. |
| popPK | Gibbs_2012 | irrelevant | 0 | 0 | The paper is a meta-analysis of efficacy (HbA1c response) and DPP-4 inhibition, not a pharmacokinetic study reporting disposition parameters like clearance or volume for alogliptin. |
| PGx | Golightly_2012 | not_relevant | 0 | 0 | The paper is a general review comparing the pharmacokinetics of DPP-4 inhibitors and does not report any pharmacogenomic effects (gene variants) on alogliptin. |
| PGx | Kan_2016 | not_relevant | 4 | 5 | The paper reports a pharmacodynamic effect (change in HbA1c/liver enzymes) associated with a genotype, but it does not report a fitted quantitative effect size (theta) for the pharmacokinetic or pharmacodynamic parameter. |
| popPK | Langford_2018 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamic dose-response modeling (Emax) and meta-analysis methods, not pharmacokinetic disposition parameters. |
| popPK | Lee_2008 | irrelevant | 2 | 0 | The study reports pharmacodynamic and efficacy data (DPP-4 inhibition, glucose levels) and bioavailability, but does not provide quantitative disposition parameters (CL, V, ka, t1/2) for alogliptin. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | no_text gate: only 169 chars of text extracted (&lt; 400) |
| PD | Liu_2016 | not_relevant | 0 | 0 | The paper focuses on imigliptin, not alogliptin, and does not report PD parameters for the target drug. |
| popPK | Naik_2016 | relevant | 10 | 2 | The paper describes a population PK model for alogliptin, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided abstract text, only relative changes and qualitative descriptions. |
| PGx | Scheen_2010 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions for DPP-4 inhibitors, not pharmacogenomic effects of gene variants on alogliptin PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 22:10 UTC</sub>
