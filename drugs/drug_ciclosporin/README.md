<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ciclosporin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ciclosporin_Gao2022_reference&quot;,&quot;label&quot;:&quot;Gao_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ciclosporin/Ciclosporin_Gao2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ciclosporin_Kauv2025_reference&quot;,&quot;label&quot;:&quot;Kauv_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ciclosporin/Ciclosporin_Kauv2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ciclosporin_Han2013_reference&quot;,&quot;label&quot;:&quot;Han_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ciclosporin/Ciclosporin_Han2013_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Albitar_2022_eGFR&quot;,&quot;label&quot;:&quot;Albitar_2022 \u00b7 eGFR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_ciclosporin/pd_Albitar_2022_eGFR.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# ciclosporin

- **generic name:** ciclosporin
- **ATC codes:** `L04AD01`, `S01XA18`
- **DrugBank:** [DB00091](https://go.drugbank.com/drugs/DB00091) · **PubChem:** not captured
- **groups:** approved, investigational, vet_approved

## About

Ciclosporin is an immunosuppressant used to treat autoimmune conditions such as rheumatoid arthritis, systemic lupus erythematosus, myasthenia gravis, and graft-versus-host disease, as well as certain eye conditions like dry eye syndromes. It is widely used and is included on the WHO essential medicines list; several products are authorised in the European Union, mainly for eye conditions, and it is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q367700](https://www.wikidata.org/wiki/Q367700) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ciclosporin (cyclosporine) | parent | 1202.63 | C62H111N11O12 | PubChem | [5284373](https://pubchem.ncbi.nlm.nih.gov/compound/5284373) | Gao_2022, Han_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:22 | 6:33 | 2/0/1 | 0/0/2 | 0/0/0 | 171,823/53,551 | einfracz / qwen3.8-27b | 9 | 6/3 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Gao_2022_reference](drugs/drug_ciclosporin/Ciclosporin_Gao2022_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Gao X et al., Population Pharmacokinetics of Cyclospo…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.933739](https://doi.org/10.3389/fphar.2022.933739) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Kauv_2025_reference](drugs/drug_ciclosporin/Ciclosporin_Kauv2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Kauv J et al., Population pharmacokinetics of mycophen…, European journal of pharmac… (2025) | [10.1016/j.ejps.2025.107290](https://doi.org/10.1016/j.ejps.2025.107290) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): k12, k21</sub><br><sub>route_to: `scholar`</sub> | [Han_2013_reference](drugs/drug_ciclosporin/Ciclosporin_Han2013_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 | Han K et al., Population pharmacokinetics of cyclospo…, The AAPS journal (2013) | [10.1208/s12248-013-9500-8](https://doi.org/10.1208/s12248-013-9500-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Albitar_2022_eGFR](drugs/drug_ciclosporin/pd_Albitar_2022_eGFR.md) | estimated glomerular filtration rate ← cyclosporine cumulative exposure (area under the concentration-time curve) · direct Emax (saturable) effect | ▶ model + simulator | Albitar O et al., Time-Dissociated Pharmacokinetic Pharma…, Therapeutic drug monitoring (2022) | [10.1097/FTD.0000000000000916](https://doi.org/10.1097/FTD.0000000000000916) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Wan_2025_EASI](drugs/drug_ciclosporin/pd_Wan_2025_EASI.md) | Eczema Area and Severity Index ← ciclosporin · direct linear effect | model (no simulator) | Wan M et al., Exposure-response of ciclosporin and me…, Clinical and experimental d… (2025) | [10.1093/ced/llaf147](https://doi.org/10.1093/ced/llaf147) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Wan_2025_o_SCORAD](drugs/drug_ciclosporin/pd_Wan_2025_o_SCORAD.md) | objective SCORing for Atopic Dermatitis ← ciclosporin · direct linear effect | model (no simulator) | Wan M et al., Exposure-response of ciclosporin and me…, Clinical and experimental d… (2025) | [10.1093/ced/llaf147](https://doi.org/10.1093/ced/llaf147) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ciclosporin).

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
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCC2` inhibitor, `SLC22A6` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor/substrate, `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC10 (inhibitor), ABCC10 (substrate), CAMLG (binder), PPIA (binder), PPIA (inhibitor), PPIF (binder), PPP3CA (inhibitor), PPP3R2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 304 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 2  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albitar_2022 | relevant | 3 | 1 | The study develops a PKPD model for cyclosporine in humans, but the reported numeric values are primarily pharmacodynamic (eGFR, Emax) rather than quantitative pharmacokinetic disposition parameters (CL, Vd, ka). |
| popPK | Alexander_2024 | irrelevant | 0 | 0 | This is a clinical effectiveness and safety study comparing treatments for atopic dermatitis, reporting no pharmacokinetic parameters for ciclosporin. |
| popPK | Bergmann_2012 | irrelevant | 0 | 0 | The paper is a review focused on the pharmacokinetics of prednisolone and prednisone, with ciclosporin mentioned only as a concomitant medication or in the context of drug interactions, not as the subject drug. |
| popPK | Candela-Boix_2021 | irrelevant | 0 | 0 | The paper is a systematic review focusing on the pharmacokinetics of sirolimus, not ciclosporin. |
| popPK | Devineni_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of canagliflozin, with ciclosporin appearing only as a non-interacting co-administered agent. |
| popPK | Golubovic_2016 | irrelevant | 0 | 0 | The paper is a review of existing population pharmacokinetic models and does not report original quantitative disposition parameters for ciclosporin. |
| popPK | Hsu_2021 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study reporting EC50 values for viral inhibition and cytokine production, containing no pharmacokinetic disposition parameters (CL, V, ka, etc.) for ciclosporin. |
| popPK | Kauv_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for mycophenolate acid (MPA), with ciclosporin serving only as a co-administered covariate affecting MPA clearance. |
| popPK | Kovarik_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of everolimus, with ciclosporin serving only as a co-administered background drug. |
| popPK | Methaneethorn_2022 | irrelevant | 2 | 0 | The paper is a systematic review of sirolimus pharmacokinetics, with ciclosporin only mentioned as a co-administered drug influencing sirolimus clearance, not as the subject drug. |
| popPK | Mueller_1998 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| popPK | Paintaud_2004 | irrelevant | 0 | 0 | The text is a general review or introduction discussing biomarkers and PK-PD concepts without reporting any specific quantitative pharmacokinetic parameters for ciclosporin. |
| popPK | Thygesen_2009 | irrelevant | 1 | 0 | This is a workshop report on PBPK modeling of macromolecules that mentions cyclosporine A as a successful example, but it is a small molecule, not the subject of the macromolecule focus, and no quantitative PK parameter values are reported. |
| popPK | Wadsworth_2020 | irrelevant | 0 | 0 | The paper is a methods study on exposure-response modeling for epilepsy drugs, mentioning ciclosporin only as a brief in-vitro example for non-linear models without reporting PK parameters. |
| popPK | Wan_2025 | irrelevant | 2 | 1 | The study reports trough concentration-response relationships for therapeutic drug monitoring in atopic dermatitis, but does not estimate or report quantitative pharmacokinetic disposition parameters (CL, V, ka, half-life). |
| popPK | Woillard_2025 | irrelevant | 4 | 0 | The study develops machine learning models to predict AUC from limited sampling and does not report specific quantitative PK parameter values (CL, V, Q, ka, t1/2) for ciclosporin, instead focusing on prediction performance metrics (RMSE, MPE). |
| popPK | Zimmerman_2004 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of sirolimus, with ciclosporin mentioned only as a co-administered drug or comparator in drug interaction studies. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 21:18 UTC</sub>
