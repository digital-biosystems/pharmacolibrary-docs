<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ciclosporin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ciclosporin_Han2013_reference&quot;,&quot;label&quot;:&quot;Han_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ciclosporin/Ciclosporin_Han2013_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ciclosporin_Kauv2025_reference&quot;,&quot;label&quot;:&quot;Kauv_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ciclosporin/Ciclosporin_Kauv2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ciclosporin

- **generic name:** ciclosporin
- **ATC codes:** `L04AD01`, `S01XA18`
- **DrugBank:** [DB00091](https://go.drugbank.com/drugs/DB00091) · **PubChem:** not captured
- **groups:** approved, investigational, vet_approved

## About

Ciclosporin is an immunosuppressant used to treat autoimmune conditions such as rheumatoid arthritis, systemic lupus erythematosus, myasthenia gravis, and graft-versus-host disease, as well as certain eye conditions like dry eye syndromes. It is widely used and is included on the WHO essential medicines list; several products are authorised in the European Union, mainly for eye conditions, and it is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q367700](https://www.wikidata.org/wiki/Q367700) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ciclosporin (cyclosporine) | parent | 1202.63 | C62H111N11O12 | PubChem | [5284373](https://pubchem.ncbi.nlm.nih.gov/compound/5284373) | Gao_2022, Han_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:05 | 4:00 | 2/1/0 | 1/0/2 | 0/0/0 | 213,191/21,505 | einfracz / qwen3.8-27b | 9 | 6/3 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Han_2013_reference](drugs/drug_ciclosporin/Ciclosporin_Han2013_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Han K et al., Population pharmacokinetics of cyclospo…, The AAPS journal (2013) | [10.1208/s12248-013-9500-8](https://doi.org/10.1208/s12248-013-9500-8) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kauv_2025_reference](drugs/drug_ciclosporin/Ciclosporin_Kauv2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Kauv J et al., Population pharmacokinetics of mycophen…, European journal of pharmac… (2025) | [10.1016/j.ejps.2025.107290](https://doi.org/10.1016/j.ejps.2025.107290) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Gao_2022_reference](drugs/drug_ciclosporin/Ciclosporin_Gao2022_reference.md) | — | 2-compartment (no model) | 6 | Gao X et al., Population Pharmacokinetics of Cyclospo…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.933739](https://doi.org/10.3389/fphar.2022.933739) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Wadsworth_2020_PBM_proliferation](drugs/drug_ciclosporin/pd_Wadsworth_2020_PBM_proliferation.md) | in vitro inhibitory effect on peripheral blood monocyte (PBM) proliferation ← cyclosporine · direct Emax (saturable) effect | — | Wadsworth I et al., Exposure-response modelling approaches…, Statistical methods in medi… (2020) | [10.1177/0962280220903751](https://doi.org/10.1177/0962280220903751) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Albitar_2022_eGFR](drugs/drug_ciclosporin/pd_Albitar_2022_eGFR.md) | renal graft function response, quantified as estimated glomerular filtration rate (eGFR) ← cyclosporine · direct Emax (saturable) effect | model (no simulator) | Albitar O et al., Time-Dissociated Pharmacokinetic Pharma…, Therapeutic drug monitoring (2022) | [10.1097/FTD.0000000000000916](https://doi.org/10.1097/FTD.0000000000000916) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Wan_2025_EASI](drugs/drug_ciclosporin/pd_Wan_2025_EASI.md) | EASI scores ← ciclosporin · direct linear effect | model (no simulator) | Wan M et al., Exposure-response of ciclosporin and me…, Clinical and experimental d… (2025) | [10.1093/ced/llaf147](https://doi.org/10.1093/ced/llaf147) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Wan_2025_o_SCORAD](drugs/drug_ciclosporin/pd_Wan_2025_o_SCORAD.md) | o-SCORAD scores ← ciclosporin · direct linear effect | model (no simulator) | Wan M et al., Exposure-response of ciclosporin and me…, Clinical and experimental d… (2025) | [10.1093/ced/llaf147](https://doi.org/10.1093/ced/llaf147) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ciclosporin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | ileum | `SLC10A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `SLC10A1` inhibitor, `SLCO1B1` inhibitor/substrate, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor, `SLC22A6` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor/substrate, `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC10 (inhibitor), ABCC10 (substrate), CAMLG (binder), PPIA (binder), PPIA (inhibitor), PPIF (binder), PPP3CA (inhibitor), PPP3R2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 304 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albitar_2022 | irrelevant | 3 | 0 | The paper describes a PKPD model focusing on pharmacodynamic endpoints (eGFR, Emax) but does not report quantitative pharmacokinetic disposition parameters (CL, V, ka) for ciclosporin in the provided text. |
| popPK | Alexander_2024 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy and safety of treatments for atopic dermatitis, not a pharmacokinetic study, and reports no PK parameters for ciclosporin. |
| popPK | Bergmann_2012 | irrelevant | 0 | 0 | The paper is a review of prednisolone and prednisone pharmacokinetics; ciclosporin is only mentioned as a co-administered agent, and no quantitative PK parameters for ciclosporin are reported. |
| popPK | Candela-Boix_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sirolimus, not ciclosporin (which is only mentioned as a covariate/comparator). |
| popPK | Devineni_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of canagliflozin, with ciclosporin appearing only as a co-administered drug in a drug-drug interaction section without reporting any of its PK parameters. |
| popPK | Golubovic_2016 | irrelevant | 2 | 0 | The paper is a narrative review of population pharmacokinetic models and does not contain original quantitative parameter values in the provided evidence. |
| popPK | Hsu_2021 | irrelevant | 0 | 0 | The paper is an in vitro antiviral study reporting EC50 values for virus inhibition and IL-6 suppression, not pharmacokinetic parameters like clearance, volume, or half-life for ciclosporin. |
| popPK | Kauv_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mycophenolate acid (MPA), with ciclosporin only mentioned as a co-administered immunosuppressant or a covariate affecting MPA clearance. |
| popPK | Kovarik_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of everolimus, with ciclosporin (cyclosporine) serving only as a co-administered drug. |
| popPK | Methaneethorn_2022 | irrelevant | 0 | 0 | The paper is a systematic review of sirolimus (SRL) pharmacokinetics, where ciclosporin (CsA) is only mentioned as a covariate or interacting drug, not the subject of the PK parameter estimation. |
| popPK | Mueller_1998 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| popPK | Paintaud_2004 | irrelevant | 1 | 0 | This is a review article discussing biomarkers and PK-PD concepts generally without reporting original quantitative pharmacokinetic parameter values for ciclosporin. |
| popPK | Thygesen_2009 | irrelevant | 2 | 0 | This is a workshop summary/review discussing PBPK modeling concepts and mentions a cyclosporine example but provides no quantitative PK parameters. |
| popPK | Wadsworth_2020 | irrelevant | 0 | 0 | The paper focuses on exposure-response modeling methods for children, mentioning cyclosporine only briefly as a non-linear example in the abstract, without providing any PK parameter values. |
| popPK | Wan_2025 | irrelevant | 2 | 0 | The study measures trough concentrations for therapeutic drug monitoring and exposure-response analysis, but does not report compartmental pharmacokinetic parameters (CL, V, Q, ka) for ciclosporin. |
| popPK | Woillard_2025 | irrelevant | 2 | 0 | The study focuses on machine learning prediction of AUC and does not report quantitative PK parameters (CL, V, ka, t1/2) for ciclosporin; it only uses a PopPK model as a comparator. |
| popPK | Zimmerman_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response relationships of sirolimus, with ciclosporin mentioned only as a co-administered drug for drug interaction assessment. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:01 UTC</sub>
