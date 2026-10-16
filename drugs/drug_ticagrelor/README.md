<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;ticagrelor&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ticagrelor_strand2019_reference&quot;,&quot;label&quot;:&quot;\u00c5strand_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_strand2019_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ticagrelor_Henrich2021_reference&quot;,&quot;label&quot;:&quot;Henrich_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_Henrich2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ticagrelor_Li2016_reference&quot;,&quot;label&quot;:&quot;Li_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_Li2016_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_strand_2019_PRU&quot;,&quot;label&quot;:&quot;\u00c5strand_2019 \u00b7 PRU&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/pd_strand_2019_PRU.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ticagrelor

- **generic name:** ticagrelor
- **ATC codes:** `B01AC24`
- **DrugBank:** [DB08816](https://go.drugbank.com/drugs/DB08816) · **PubChem:** [CID 9871419](https://pubchem.ncbi.nlm.nih.gov/compound/9871419)
- **molar mass:** 522.568 g/mol (C23H28F2N6O4S) — DrugBank
- **groups:** approved, investigational

## About

Ticagrelor is an antiplatelet medicine used to prevent blood clots in people with acute coronary syndrome, including heart attack and unstable angina. It is an approved drug authorised in the European Union and widely used for these heart conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420542](https://www.wikidata.org/wiki/Q420542) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ticagrelor | parent | 522.568 | C23H28F2N6O4S | DrugBank | [9871419](https://pubchem.ncbi.nlm.nih.gov/compound/9871419) | Amilon_2019, Kathman_2022, Li_2016, Åstrand_2019 |
| AR-C124910XX | metabolite | 478.518 | C21H24F2N6O3S | PubChem | [49846084](https://pubchem.ncbi.nlm.nih.gov/compound/49846084) | Amilon_2019, Li_2016, Åstrand_2019 |
| ticagrelor active metabolite | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:18 | 5:51 | 1/2/2 | 3/0/2 | 0/0/0 | 280,845/28,407 | einfracz / qwen3.8-27b | 13 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Åstrand_2019_reference](drugs/drug_ticagrelor/Ticagrelor_strand2019_reference.md) | ▶ model + simulator | parent 2-cmt + 1 metabolite (2-cmt) | 12 (+1 cov.) | Åstrand M et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2019) | [10.1111/bcp.13812](https://doi.org/10.1111/bcp.13812) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.3), gpt-oss:120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Amilon_2019_reference](drugs/drug_ticagrelor/Ticagrelor_Amilon2019_reference.md) | — | parent + metabolite (no model) | 4 | Amilon C et al., Population Pharmacokinetics/Pharmacodyn…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00758-0](https://doi.org/10.1007/s40262-019-00758-0) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.522), gpt-oss:120b (partly confirmed, agreement 0.522). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Henrich_2021_reference](drugs/drug_ticagrelor/Ticagrelor_Henrich2021_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Henrich A et al., Pharmacokinetic/pharmacodynamic modelin…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12641](https://doi.org/10.1002/psp4.12641) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.195). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Kathman_2022_reference](drugs/drug_ticagrelor/Ticagrelor_Kathman2022_reference.md) | — | parent + metabolite (no model) | 4 | Kathman SJ et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12734](https://doi.org/10.1002/psp4.12734) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.308), gpt-oss:120b (partly confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub><br><sub>route_to: `engineer`</sub> | [Li_2016_reference](drugs/drug_ticagrelor/Ticagrelor_Li2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Li J et al., Population pharmacokinetics of ticagrel…, International journal of cl… (2016) | [10.5414/CP202549](https://doi.org/10.5414/CP202549) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span> | [Henrich_2021_PRU](drugs/drug_ticagrelor/pd_Henrich_2021_PRU.md) | P2Y12 reaction units ← ticagrelor · delayed effect through transit (transduction) compartments | — | Henrich A et al., Pharmacokinetic/pharmacodynamic modelin…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12641](https://doi.org/10.1002/psp4.12641) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> | [Liu_2018_maximal_platelet_inhibition](drugs/drug_ticagrelor/pd_Liu_2018_maximal_platelet_inhibition.md) | maximal platelet inhibition ← ticagrelor · indirect response — drug inhibits the production of maximal platelet inhibition | — | Liu S et al., Population pharmacokinetics and pharmac…, European journal of clinica… (2018) | [10.1007/s00228-018-2427-3](https://doi.org/10.1007/s00228-018-2427-3) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.889). Primary extraction retained.">cross-check: disputed</span> | [Åstrand_2019_PRU](drugs/drug_ticagrelor/pd_strand_2019_PRU.md) | platelet function ← ticagrelor · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Åstrand M et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2019) | [10.1111/bcp.13812](https://doi.org/10.1111/bcp.13812) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Kathman_2022_LTA](drugs/drug_ticagrelor/pd_Kathman_2022_LTA.md) | light transmittance aggregometry biomarker turnover ← ticagrelor, ticagrelor active metabolite | — | Kathman SJ et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12734](https://doi.org/10.1002/psp4.12734) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span> | [Kathman_2022_PRU](drugs/drug_ticagrelor/pd_Kathman_2022_PRU.md) | P2Y12 reactivity units biomarker turnover ← ticagrelor, ticagrelor active metabolite | — | Kathman SJ et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12734](https://doi.org/10.1002/psp4.12734) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Kathman_2022_VASP](drugs/drug_ticagrelor/pd_Kathman_2022_VASP.md) | vasodilator stimulated phosphoprotein biomarker turnover ← ticagrelor, ticagrelor active metabolite | — | Kathman SJ et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12734](https://doi.org/10.1002/psp4.12734) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Röshammar_2017_CV_death_MI_stroke](drugs/drug_ticagrelor/pd_R_shammar_2017_CV_death_MI_stroke.md) | composite risk of cardiovascular (CV) death, myocardial infarction (MI), and stroke ← ticagrelor · time-to-event model | — | Röshammar D et al., Exposure-Response Analyses Supporting T…, Journal of clinical pharmac… (2017) | [10.1002/jcph.839](https://doi.org/10.1002/jcph.839) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Röshammar_2017_TIMI_major_bleeding](drugs/drug_ticagrelor/pd_R_shammar_2017_TIMI_major_bleeding.md) | TIMI major bleeding ← ticagrelor · time-to-event model | — | Röshammar D et al., Exposure-Response Analyses Supporting T…, Journal of clinical pharmac… (2017) | [10.1002/jcph.839](https://doi.org/10.1002/jcph.839) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ticagrelor).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `CYP3A5` activator/substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP2C9` inducer/inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` activator/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` activator/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: P2RY12 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 1  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Amilon_2019.pdf` | Amilon C et al., Population Pharmacokinetics/Pharmacodyn…, Clinical pharmacokinetics (2019) | popPK | 10 | [10.1007/s40262-019-00758-0](https://doi.org/10.1007/s40262-019-00758-0) | [30972696](https://pubmed.ncbi.nlm.nih.gov/30972696) | The abstract reports specific quantitative population PK parameters, including oral clearance and volume of distribution relationships, for ticagrelor and its active metabolite in pediatric patients. |
| `Li_2016.pdf` | Li J et al., Population pharmacokinetics of ticagrel…, International journal of cl… (2016) | popPK | 10 | [10.5414/CP202549](https://doi.org/10.5414/CP202549) | [27191766](https://pubmed.ncbi.nlm.nih.gov/27191766) | The abstract explicitly reports quantitative population PK parameters for ticagrelor (ka, CL, V, bioavailability) and covariate effects. |
| `Liu_2018.pdf` | Liu S et al., Population pharmacokinetics and pharmac…, European journal of clinica… (2018) | popPK | 10 | [10.1007/s00228-018-2427-3](https://doi.org/10.1007/s00228-018-2427-3) | [29442148](https://pubmed.ncbi.nlm.nih.gov/29442148) | The paper reports a population PK model for ticagrelor but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided text or evidence. |
| `Liu_2024.pdf` | Liu M et al., Population pharmacokinetic study and ap…, International journal of cl… (2024) | popPK | 10 | [10.5414/CP204550](https://doi.org/10.5414/CP204550) | [39037109](https://pubmed.ncbi.nlm.nih.gov/39037109) | Quantitative PK parameters (ka = 0.67/h, model structure) are reported in the abstract, but specific clearance/volume values are not present in the provided evidence. |
| `Liu_2023.pdf` | Liu Z et al., Integrated Pharmacokinetics/Pharmacodyn…, Clinical pharmacokinetics (2023) | popPK | 9 | [10.1007/s40262-022-01208-0](https://doi.org/10.1007/s40262-022-01208-0) | [36735213](https://pubmed.ncbi.nlm.nih.gov/36735213) | The study describes a population PK model for ticagrelor with specific covariates (food, weight), but the actual numeric parameter estimates (CL, V, Ka) are not provided in the extracted evidence text. |

<sub>queue written 2026-10-14T18:13:15.167535+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2024 | irrelevant | 3 | 0 | The paper is a systematic review of PopPK models for P2Y12 inhibitors, and the specific quantitative parameter values are not provided in the extracted evidence. |
| PD | Chen_2024 | not_relevant | 3 | 1 | The paper is a systematic review and simulation study that summarizes existing models but does not report original numeric PD parameters (e.g., Emax, EC50) or specific concentration-effect curves for ticagrelor in the provided text. |
| popPK | Giacoppo_2025 | irrelevant | 0 | 0 | The paper is a clinical meta-analysis of efficacy outcomes (MACCE, bleeding) for P2Y12 inhibitors vs aspirin, containing no pharmacokinetic parameters. |
| popPK | Henrich_2021 | irrelevant | 1 | 0 | The study models selatogrel PK and the PD interactions of ticagrelor as a comparator drug, but does not report quantitative PK parameters (CL, V, etc.) for ticagrelor itself, which are taken from literature. |
| popPK | Infeld_2021 | irrelevant | 0 | 0 | The study assesses platelet reactivity (pharmacodynamics) rather than reporting quantitative pharmacokinetic parameters such as clearance, volume, or half-life for ticagrelor. |
| popPK | Lee_2018 | irrelevant | 3 | 2 | This is a systematic review reporting descriptive PK metrics (Cmax, AUC) from primary trials rather than quantitative population-pharmacokinetic model parameters (CL, V, Q). |
| PD | Lee_2018 | not_relevant | 3 | 2 | The paper is a systematic review that qualitatively summarizes PK and PD data from other studies but does not present a specific exposure-response model or derive numeric PD parameters (e.g., Emax, EC50) for ticagrelor. |
| popPK | Liu_2018 | relevant | 10 | 0 | The paper reports a population PK model for ticagrelor but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided text or evidence. |
| popPK | Liu_2023 | relevant | 9 | 1 | The study describes a population PK model for ticagrelor with specific covariates (food, weight), but the actual numeric parameter estimates (CL, V, Ka) are not provided in the extracted evidence text. |
| popPK | Liu_2023_2 | irrelevant | 2 | 0 | The paper describes a PopPK model but the provided evidence contains no quantitative PK parameter values (e.g., CL, V, ka) for ticagrelor. |
| popPK | Liu_2024 | relevant | 10 | 3 | Quantitative PK parameters (ka = 0.67/h, model structure) are reported in the abstract, but specific clearance/volume values are not present in the provided evidence. |
| popPK | Röshammar_2017 | irrelevant | 2 | 1 | This is an exposure-response (pharmacodynamic/outcome) analysis using predicted exposure levels (Cavg) rather than a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka, etc.). |
| popPK | Siller-Matula_2010 | irrelevant | 4 | 3 | Review article citing ticagrelor half-life (6-12h) from primary trials, but lacking detailed compartmental parameters (CL, Vd) required for population-PK extraction. |
| PD | Siller-Matula_2010 | not_relevant | 2 | 0 | The paper is a review article summarizing the pharmacology of various antiplatelet agents, including ticagrelor, but does not present original data, specific numeric PD parameters, or extractable concentration-effect curves for ticagrelor. |
| popPK | Teng_2012 | irrelevant | 2 | 0 | This is a review article summarizing the profile of ticagrelor without providing original quantitative compartmental PK parameters (CL, V, Q) or specific numeric values for clearance and volume. |
| PD | Teng_2012 | not_relevant | 2 | 1 | The text is a qualitative review summarizing the PK/PD profile of ticagrelor without providing specific numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect curves. |
| popPK | Teng_2015_2 | relevant | 6 | 4 | This is a review summarizing pharmacokinetic parameters (tmax, half-life, bioavailability) of ticagrelor in humans, but it lacks detailed compartmental model parameters (CL, V, Q) and relies on secondary data rather than original quantitative extraction. |
| PD | Teng_2015_2 | not_relevant | 4 | 2 | The paper is a review that references a sigmoid Emax model and includes a scatter plot of concentration vs. effect, but it does not provide the specific numeric PD parameters (Emax, EC50) or a detailed data table from which they can be derived. |
| popPK | Valgimigli_2024 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical outcomes (efficacy and safety) and contains no pharmacokinetic parameters for ticagrelor. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The study is a clinical trial evaluating antiplatelet efficacy and safety, reporting no quantitative pharmacokinetic parameters for ticagrelor. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 18:13 UTC</sub>
