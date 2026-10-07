<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;maribavir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Maribavir_Fromage2025_reference&quot;,&quot;label&quot;:&quot;Fromage_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/Maribavir_Fromage2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Maribavir_Song2020_reference&quot;,&quot;label&quot;:&quot;Song_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/Maribavir_Song2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Maribavir_Song2024_reference&quot;,&quot;label&quot;:&quot;Song_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/Maribavir_Song2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Maribavir_Sun2025_estimates&quot;,&quot;label&quot;:&quot;Sun_2025_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maribavir/Maribavir_Sun2025_estimates.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# maribavir

- **generic name:** maribavir
- **ATC codes:** `J05AX10`
- **DrugBank:** [DB06234](https://go.drugbank.com/drugs/DB06234) · **PubChem:** not captured
- **molar mass:** 376.23 g/mol (C15H19Cl2N3O4) — DrugBank
- **groups:** approved, investigational

## About

Maribavir is an antiviral medicine used to treat cytomegalovirus infections. It is an approved antiviral and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6762512](https://www.wikidata.org/wiki/Q6762512) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| maribavir | parent | 376.23 | C15H19Cl2N3O4 | DrugBank | — | Fromage_2025, Song_2024, Sun_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:12 | 5:06 | 4/0/4 | 1/0/0 | 0/0/0 | 248,145/16,821 | ollama / glm-5.3-flash | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Fromage_2025_reference](drugs/drug_maribavir/Maribavir_Fromage2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Fromage Y et al., Optimizing CMV therapy: Population phar…, PloS one (2025) | [10.1371/journal.pone.0321180](https://doi.org/10.1371/journal.pone.0321180) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Song_2020_reference](drugs/drug_maribavir/Maribavir_Song2020_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Song IH et al., Effects of Maribavir on P-Glycoprotein…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1504](https://doi.org/10.1002/jcph.1504) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Song_2024_reference](drugs/drug_maribavir/Maribavir_Song2024_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+4 cov.) | Song IH et al., Population pharmacokinetics and exposur…, Journal of pharmacokinetics… (2024) | [10.1007/s10928-024-09939-2](https://doi.org/10.1007/s10928-024-09939-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sun_2025_estimates](drugs/drug_maribavir/Maribavir_Sun2025_estimates.md) | ▶ model + simulator | 2-compartment, oral | 7 (+4 cov.) | Sun K et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70054](https://doi.org/10.1002/psp4.70054) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Sun_2025_all_individuals_a](drugs/drug_maribavir/Maribavir_Sun2025_all_individuals_a.md) | — | 1-compartment (no model) | 7 | Sun K et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70054](https://doi.org/10.1002/psp4.70054) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Sun_2025_all_transplant_recipients_with_cmv](drugs/drug_maribavir/Maribavir_Sun2025_all_transplant_recipients_with_cmv.md) | — | 1-compartment (no model) | 7 | Sun K et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70054](https://doi.org/10.1002/psp4.70054) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Sun_2025_healthy_volunteers](drugs/drug_maribavir/Maribavir_Sun2025_healthy_volunteers.md) | — | 1-compartment (no model) | 7 | Sun K et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70054](https://doi.org/10.1002/psp4.70054) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Sun_2025_transplant_recipients_with_cmv_aurora_study_only](drugs/drug_maribavir/Maribavir_Sun2025_transplant_recipients_with_cmv_aurora_stud.md) | — | 1-compartment (no model) | 7 | Sun K et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70054](https://doi.org/10.1002/psp4.70054) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Song_2024_CMV_viremia_clearance](drugs/drug_maribavir/pd_Song_2024_CMV_viremia_clearance.md) | Confirmed CMV clearance of plasma CMV DNA at week 8 ← maribavir · direct log-linear effect | — | Song IH et al., Population pharmacokinetics and exposur…, Journal of pharmacokinetics… (2024) | [10.1007/s10928-024-09939-2](https://doi.org/10.1007/s10928-024-09939-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Song_2024_Fatigue](drugs/drug_maribavir/pd_Song_2024_Fatigue.md) | Fatigue ← maribavir · direct log-linear effect | — | Song IH et al., Population pharmacokinetics and exposur…, Journal of pharmacokinetics… (2024) | [10.1007/s10928-024-09939-2](https://doi.org/10.1007/s10928-024-09939-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Song_2024_TE_SAE](drugs/drug_maribavir/pd_Song_2024_TE_SAE.md) | Treatment-emergent serious adverse events ← maribavir · direct log-linear effect | — | Song IH et al., Population pharmacokinetics and exposur…, Journal of pharmacokinetics… (2024) | [10.1007/s10928-024-09939-2](https://doi.org/10.1007/s10928-024-09939-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Song_2024_dysgeusia](drugs/drug_maribavir/pd_Song_2024_dysgeusia.md) | Taste disturbance ← maribavir · direct log-linear effect | — | Song IH et al., Population pharmacokinetics and exposur…, Journal of pharmacokinetics… (2024) | [10.1007/s10928-024-09939-2](https://doi.org/10.1007/s10928-024-09939-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Song_2024_key_secondary_endpoint](drugs/drug_maribavir/pd_Song_2024_key_secondary_endpoint.md) | Confirmed CMV viremia clearance and CMV infection symptom control at week 8 followed by maintenance through week 16 ← maribavir · direct log-linear effect | — | Song IH et al., Population pharmacokinetics and exposur…, Journal of pharmacokinetics… (2024) | [10.1007/s10928-024-09939-2](https://doi.org/10.1007/s10928-024-09939-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Song_2024_TE_CMV_maribavir_resistant_mutations](drugs/drug_maribavir/pd_Song_2024_TE_CMV_maribavir_resistant_mutations.md) | Development of treatment-emergent mutations conferring resistance to maribavir ← maribavir · direct log-linear effect | model (no simulator) | Song IH et al., Population pharmacokinetics and exposur…, Journal of pharmacokinetics… (2024) | [10.1007/s10928-024-09939-2](https://doi.org/10.1007/s10928-024-09939-2) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=maribavir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 16 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 8  ·  extracted 4  ·  needs_review 4  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fromage_2026.pdf` | Fromage Y et al., Monte Carlo simulations identify subopt…, The Journal of antimicrobia… (2026) | popPK | 7 | [10.1093/jac/dkag153](https://doi.org/10.1093/jac/dkag153) | [42090285](https://pubmed.ncbi.nlm.nih.gov/42090285) | Maribavir population-PK model used for Monte Carlo dosing simulations, but the numeric CL/V/ka parameter values are not shown in the evidence (only C0/AUC/PTA outcomes referenced). |

<sub>queue written 2026-10-07T17:08:06.432146+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdalla_2023 | irrelevant | 0 | 0 | Maribavir is only one of several screened nucleoside analogs in an in-vitro/in-silico COVID-19 docking study; no PK disposition parameters for maribavir are reported. |
| popPK | Carter_2025 | irrelevant | 0 | 0 | In-vitro antiviral drug-resistance study (EC50 profiling) with no pharmacokinetic parameters for maribavir. |
| popPK | Chemaly_2019 | irrelevant | 0 | 0 | In vitro antiviral activity review; no PK parameters for maribavir. |
| popPK | Chou_2019 | irrelevant | 0 | 0 | This is a virology/resistance-genotyping study with no PK parameters (no CL, V, ka, half-life, or population-PK model) for maribavir. |
| popPK | Chou_2024 | irrelevant | 0 | 0 | In-vitro viral susceptibility (EC50) phenotyping, not pharmacokinetic disposition parameters for maribavir. |
| popPK | Fromage_2026 | relevant | 7 | 3 | Maribavir population-PK model used for Monte Carlo dosing simulations, but the numeric CL/V/ka parameter values are not shown in the evidence (only C0/AUC/PTA outcomes referenced). |
| popPK | Hamilton_2020 | irrelevant | 0 | 0 | In vitro/ex vivo antiviral efficacy study (EC50 values), no PK disposition parameters for maribavir. |
| popPK | Lynch_2025 | irrelevant | 0 | 0 | This is a systematic review of antibiotic PK in obesity; maribavir is not mentioned at all. |
| popPK | Sun_2023 | relevant | 10 | 4 | A maribavir PopPK model (two-compartment, CL/F, V, Ka) is described, but the actual parameter estimates are in Table S2, which is not provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:08 UTC</sub>
