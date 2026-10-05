<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;ticagrelor&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ticagrelor_Henrich2021_reference&quot;,&quot;label&quot;:&quot;Henrich_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_Henrich2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ticagrelor_strand2019_reference&quot;,&quot;label&quot;:&quot;\u00c5strand_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_strand2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ticagrelor_Li2016_reference&quot;,&quot;label&quot;:&quot;Li_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_Li2016_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_strand_2019_PRU&quot;,&quot;label&quot;:&quot;\u00c5strand_2019 \u00b7 PRU&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/pd_strand_2019_PRU.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ticagrelor

- **generic name:** ticagrelor
- **ATC codes:** `B01AC24`
- **DrugBank:** [DB08816](https://go.drugbank.com/drugs/DB08816) · **PubChem:** [CID 9871419](https://pubchem.ncbi.nlm.nih.gov/compound/9871419)
- **molar mass:** 522.568 g/mol (C23H28F2N6O4S) — DrugBank
- **groups:** approved, investigational

## About

Ticagrelor is an antiplatelet medicine used to prevent blood clots in people with acute coronary syndrome, including heart attack and unstable angina. It is an approved drug authorised in the European Union and widely used for these heart conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420542](https://www.wikidata.org/wiki/Q420542) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ticagrelor | parent | 522.568 | C23H28F2N6O4S | DrugBank | [9871419](https://pubchem.ncbi.nlm.nih.gov/compound/9871419) | Amilon_2019, Kathman_2022, Li_2016, Åstrand_2019 |
| AR-C124910XX | metabolite | 478.518 | C21H24F2N6O3S | PubChem | [49846084](https://pubchem.ncbi.nlm.nih.gov/compound/49846084) | Amilon_2019, Li_2016, Åstrand_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 16:41 | 18:40 | 2/2/1 | 4/0/1 | 0/0/0 | 307,335/57,651 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.522). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Henrich_2021_reference](drugs/drug_ticagrelor/Ticagrelor_Henrich2021_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Henrich A et al., Pharmacokinetic/pharmacodynamic modelin…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12641](https://doi.org/10.1002/psp4.12641) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Åstrand_2019_reference](drugs/drug_ticagrelor/Ticagrelor_strand2019_reference.md) | ▶ model + simulator | parent 2-cmt + 1 metabolite (2-cmt) | 12 (+1 cov.) | Åstrand M et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2019) | [10.1111/bcp.13812](https://doi.org/10.1111/bcp.13812) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Amilon_2019_reference](drugs/drug_ticagrelor/Ticagrelor_Amilon2019_reference.md) | — | parent + metabolite (no model) | 4 | Amilon C et al., Population Pharmacokinetics/Pharmacodyn…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00758-0](https://doi.org/10.1007/s40262-019-00758-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Kathman_2022_reference](drugs/drug_ticagrelor/Ticagrelor_Kathman2022_reference.md) | — | parent + metabolite (no model) | 1 (+5 cov.) | Kathman SJ et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12734](https://doi.org/10.1002/psp4.12734) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.727). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub><br><sub>route_to: `engineer`</sub> | [Li_2016_reference](drugs/drug_ticagrelor/Ticagrelor_Li2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Li J et al., Population pharmacokinetics of ticagrel…, International journal of cl… (2016) | [10.5414/CP202549](https://doi.org/10.5414/CP202549) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Henrich_2021_PRU](drugs/drug_ticagrelor/pd_Henrich_2021_PRU.md) | P2Y12 reaction units ← ticagrelor · target-mediated drug disposition | — | Henrich A et al., Pharmacokinetic/pharmacodynamic modelin…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12641](https://doi.org/10.1002/psp4.12641) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kathman_2022_LTA](drugs/drug_ticagrelor/pd_Kathman_2022_LTA.md) | light transmittance aggregometry ← ticagrelor · direct sigmoid Emax (Hill) effect | — | Kathman SJ et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12734](https://doi.org/10.1002/psp4.12734) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kathman_2022_VASP](drugs/drug_ticagrelor/pd_Kathman_2022_VASP.md) | vasodilator stimulated phosphoprotein phosphorylation assay ← ticagrelor · direct sigmoid Emax (Hill) effect | — | Kathman SJ et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12734](https://doi.org/10.1002/psp4.12734) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Liu_2018_maximal_platelet_inhibition](drugs/drug_ticagrelor/pd_Liu_2018_maximal_platelet_inhibition.md) | maximal platelet inhibition ← ticagrelor · indirect response — drug inhibits the production of maximal platelet inhibition | — | Liu S et al., Population pharmacokinetics and pharmac…, European journal of clinica… (2018) | [10.1007/s00228-018-2427-3](https://doi.org/10.1007/s00228-018-2427-3) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Åstrand_2019_PRU](drugs/drug_ticagrelor/pd_strand_2019_PRU.md) | P2Y12 reaction units (PRU) ← ticagrelor · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Åstrand M et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2019) | [10.1111/bcp.13812](https://doi.org/10.1111/bcp.13812) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kathman_2022_PRU](drugs/drug_ticagrelor/pd_Kathman_2022_PRU.md) | P2Y12 reactivity units ← ticagrelor · direct sigmoid Emax (Hill) effect | model (no simulator) | Kathman SJ et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12734](https://doi.org/10.1002/psp4.12734) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Röshammar_2017_CV_death_MI_stroke](drugs/drug_ticagrelor/pd_R_shammar_2017_CV_death_MI_stroke.md) | composite risk of cardiovascular (CV) death, myocardial infarction (MI), and stroke ← ticagrelor · time-to-event model | — | Röshammar D et al., Exposure-Response Analyses Supporting T…, Journal of clinical pharmac… (2017) | [10.1002/jcph.839](https://doi.org/10.1002/jcph.839) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Röshammar_2017_TIMI_major_bleeding](drugs/drug_ticagrelor/pd_R_shammar_2017_TIMI_major_bleeding.md) | risk of TIMI major bleeding ← ticagrelor · time-to-event model | — | Röshammar D et al., Exposure-Response Analyses Supporting T…, Journal of clinical pharmac… (2017) | [10.1002/jcph.839](https://doi.org/10.1002/jcph.839) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ticagrelor) page (add drugs there; the set becomes a link).

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
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: P2RY12 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 2  ·  needs_review 1  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Amilon_2019.pdf` | Amilon C et al., Population Pharmacokinetics/Pharmacodyn…, Clinical pharmacokinetics (2019) | popPK | 10 | [10.1007/s40262-019-00758-0](https://doi.org/10.1007/s40262-019-00758-0) | [30972696](https://pubmed.ncbi.nlm.nih.gov/30972696) | The paper reports a population PK model for ticagrelor and its active metabolite in pediatric patients, with specific numeric values for clearance and volume of distribution provided in the abstract. |
| `Li_2016.pdf` | Li J et al., Population pharmacokinetics of ticagrel…, International journal of cl… (2016) | popPK | 10 | [10.5414/CP202549](https://doi.org/10.5414/CP202549) | [27191766](https://pubmed.ncbi.nlm.nih.gov/27191766) | The paper reports a population PK model for ticagrelor with explicit numeric values for clearance, volume, and absorption rate in the abstract. |
| `Liu_2018.pdf` | Liu S et al., Population pharmacokinetics and pharmac…, European journal of clinica… (2018) | popPK | 10 | [10.1007/s00228-018-2427-3](https://doi.org/10.1007/s00228-018-2427-3) | [29442148](https://pubmed.ncbi.nlm.nih.gov/29442148) | The paper describes a population PK model for ticagrelor, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Liu_2023.pdf` | Liu Z et al., Integrated Pharmacokinetics/Pharmacodyn…, Clinical pharmacokinetics (2023) | popPK | 10 | [10.1007/s40262-022-01208-0](https://doi.org/10.1007/s40262-022-01208-0) | [36735213](https://pubmed.ncbi.nlm.nih.gov/36735213) | The paper describes a population PK model for ticagrelor, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only PD outcomes and model structure. |
| `Liu_2024.pdf` | Liu M et al., Population pharmacokinetic study and ap…, International journal of cl… (2024) | popPK | 10 | [10.5414/CP204550](https://doi.org/10.5414/CP204550) | [39037109](https://pubmed.ncbi.nlm.nih.gov/39037109) | The study is a population PK analysis of ticagrelor in humans, but the evidence only provides the absorption rate constant (0.67/h) and qualitative descriptions of clearance changes, lacking specific numeric values for CL, V, or Q. |
| `Liu_2023_2.pdf` | Liu Y et al., Model-Informed Dosing Regimen of Ticagr…, Clinical pharmacology and t… (2023) | popPK | 9 | [10.1002/cpt.3048](https://doi.org/10.1002/cpt.3048) | [37702259](https://pubmed.ncbi.nlm.nih.gov/37702259) | The paper describes a population pharmacokinetic model for ticagrelor, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract or evidence text. |

<sub>queue written 2026-10-05T16:24:08.444539+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2024 | irrelevant | 2 | 0 | This is a systematic review that summarizes and simulates existing models but does not report original quantitative PK parameter values for ticagrelor in the provided text. |
| PD | Chen_2024 | not_relevant | 3 | 1 | The paper is a systematic review and simulation study that summarizes existing models but does not report original numeric PD parameters (e.g., Emax, EC50) or specific concentration-effect curves for ticagrelor in the provided text. |
| popPK | Giacoppo_2025 | irrelevant | 0 | 0 | The paper is a clinical outcomes meta-analysis comparing antiplatelet therapies and does not report any pharmacokinetic parameters for ticagrelor. |
| popPK | Henrich_2021 | irrelevant | 2 | 0 | The study focuses on the PK/PD of selatogrel, and while ticagrelor is included in the PD model, its PK parameters are taken from the literature and no quantitative PK values for ticagrelor are reported in the evidence. |
| popPK | Infeld_2021 | irrelevant | 0 | 0 | The study focuses on platelet reactivity and pharmacodynamics, not pharmacokinetic parameters like clearance or volume. |
| popPK | Lee_2018 | irrelevant | 2 | 3 | This is a systematic review that reports Cmax and AUC values from primary studies but does not provide compartmental PK parameters (CL, V, ka) or a population PK model. |
| PD | Lee_2018 | not_relevant | 3 | 2 | The paper is a systematic review that qualitatively summarizes PK and PD data from other studies but does not present a specific exposure-response model or derive numeric PD parameters (e.g., Emax, EC50) for ticagrelor. |
| popPK | Liu_2018 | relevant | 10 | 0 | The paper describes a population PK model for ticagrelor, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Liu_2023 | relevant | 10 | 2 | The paper describes a population PK model for ticagrelor, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only PD outcomes and model structure. |
| popPK | Liu_2023_2 | relevant | 9 | 0 | The paper describes a population pharmacokinetic model for ticagrelor, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract or evidence text. |
| popPK | Liu_2024 | relevant | 10 | 2 | The study is a population PK analysis of ticagrelor in humans, but the evidence only provides the absorption rate constant (0.67/h) and qualitative descriptions of clearance changes, lacking specific numeric values for CL, V, or Q. |
| popPK | Röshammar_2017 | irrelevant | 2 | 0 | The paper reports exposure-response relationships and steady-state concentrations (Cavg) but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) or a compartmental model. |
| popPK | Siller-Matula_2010 | irrelevant | 2 | 0 | The paper is a review article that summarizes pharmacokinetic properties of multiple drugs, including ticagrelor, but does not present original quantitative population-PK parameters (CL, V, Q, ka) or a compartmental model for ticagrelor. |
| PD | Siller-Matula_2010 | not_relevant | 2 | 0 | The paper is a review article summarizing the pharmacology of various antiplatelet agents, including ticagrelor, but does not present original data, specific numeric PD parameters, or extractable concentration-effect curves for ticagrelor. |
| popPK | Teng_2012 | irrelevant | 2 | 0 | The paper is a review summarizing the profile of ticagrelor and does not report original quantitative compartmental PK parameters (CL, V, Q, ka) or population model estimates. |
| PD | Teng_2012 | not_relevant | 2 | 1 | The text is a qualitative review summarizing the PK/PD profile of ticagrelor without providing specific numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect curves. |
| popPK | Teng_2015_2 | irrelevant | 4 | 2 | This is a review article that summarizes pharmacokinetic parameters (tmax, t1/2, bioavailability) but does not report original quantitative disposition parameters like clearance (CL), volume of distribution (V), or intercompartmental clearance (Q) derived from a compartmental or population PK model. |
| PD | Teng_2015_2 | not_relevant | 4 | 2 | The paper is a review that references a sigmoid Emax model and includes a scatter plot of concentration vs. effect, but it does not provide the specific numeric PD parameters (Emax, EC50) or a detailed data table from which they can be derived. |
| popPK | Valgimigli_2024 | irrelevant | 0 | 0 | This is a clinical outcome meta-analysis regarding antiplatelet therapy efficacy and safety, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | This is a clinical trial evaluating antiplatelet efficacy and safety outcomes, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 16:24 UTC</sub>
