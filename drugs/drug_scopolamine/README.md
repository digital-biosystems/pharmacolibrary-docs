<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;scopolamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Scopolamine_AlvarezJimenez2016_reference&quot;,&quot;label&quot;:&quot;Alvarez-Jimenez_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_scopolamine/Scopolamine_AlvarezJimenez2016_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Ebert_2001_EEG_alpha_power&quot;,&quot;label&quot;:&quot;Ebert_2001 \u00b7 EEG alpha power&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_scopolamine/pd_Ebert_2001_EEG_alpha_power.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# scopolamine

- **generic name:** scopolamine
- **ATC codes:** `A04AD01`, `N05CM05`, `S01FA02`
- **DrugBank:** [DB00747](https://go.drugbank.com/drugs/DB00747) · **PubChem:** [CID 3000322](https://pubchem.ncbi.nlm.nih.gov/compound/3000322)
- **molar mass:** 303.3529 g/mol (C17H21NO4) — DrugBank
- **groups:** approved, investigational

## About

Scopolamine is an anticholinergic used for conditions such as motion sickness, iridocyclitis, and other disorders listed in its treatment records. It remains an approved medicine and is included on the WHO essential medicines list, used in ophthalmic, antiemetic, and sedative roles.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q337188](https://www.wikidata.org/wiki/Q337188) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:48 | 3:46 | 1/0/2 | 2/0/0 | 0/0/0 | 87,247/7,597 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Alvarez-Jimenez_2016_reference](drugs/drug_scopolamine/Scopolamine_AlvarezJimenez2016_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Alvarez-Jimenez R et al., Model-based exposure-response analysis…, British journal of clinical… (2016) | [10.1111/bcp.13031](https://doi.org/10.1111/bcp.13031) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Ebert_2001_reference](drugs/drug_scopolamine/Scopolamine_Ebert2001_reference.md) | — | 1-compartment (no model) | 5 | Ebert U et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of clinical pharmac… (2001) | [10.1177/00912700122009836](https://doi.org/10.1177/00912700122009836) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q30 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Liem-Moolenaar_2011_reference](drugs/drug_scopolamine/Scopolamine_LiemMoolenaar2011_reference.md) | — | 1-compartment (no model) | 4 | Liem-Moolenaar M et al., Pharmacokinetic-pharmacodynamic relatio…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.03936.x](https://doi.org/10.1111/j.1365-2125.2011.03936.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Ebert_2001_EEG_alpha_power](drugs/drug_scopolamine/pd_Ebert_2001_EEG_alpha_power.md) | total power in alpha frequency band ← scopolamine · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Ebert U et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of clinical pharmac… (2001) | [10.1177/00912700122009836](https://doi.org/10.1177/00912700122009836) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Liem-Moolenaar_2011_Adaptive_tracking](drugs/drug_scopolamine/pd_Liem_Moolenaar_2011_Adaptive_tracking.md) | Adaptive tracking ← scopolamine · delayed effect through an effect compartment | model (no simulator) | Liem-Moolenaar M et al., Pharmacokinetic-pharmacodynamic relatio…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.03936.x](https://doi.org/10.1111/j.1365-2125.2011.03936.x) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Liem-Moolenaar_2011_Body_sway](drugs/drug_scopolamine/pd_Liem_Moolenaar_2011_Body_sway.md) | Body sway ← scopolamine · delayed effect through an effect compartment | model (no simulator) | Liem-Moolenaar M et al., Pharmacokinetic-pharmacodynamic relatio…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.03936.x](https://doi.org/10.1111/j.1365-2125.2011.03936.x) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Liem-Moolenaar_2011_Finger_tapping](drugs/drug_scopolamine/pd_Liem_Moolenaar_2011_Finger_tapping.md) | Finger tapping ← scopolamine · delayed effect through an effect compartment | model (no simulator) | Liem-Moolenaar M et al., Pharmacokinetic-pharmacodynamic relatio…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.03936.x](https://doi.org/10.1111/j.1365-2125.2011.03936.x) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Liem-Moolenaar_2011_Heart_rate](drugs/drug_scopolamine/pd_Liem_Moolenaar_2011_Heart_rate.md) | Heart rate ← scopolamine · delayed effect through an effect compartment | model (no simulator) | Liem-Moolenaar M et al., Pharmacokinetic-pharmacodynamic relatio…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.03936.x](https://doi.org/10.1111/j.1365-2125.2011.03936.x) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Liem-Moolenaar_2011_SPV](drugs/drug_scopolamine/pd_Liem_Moolenaar_2011_SPV.md) | Saccadic peak velocity ← scopolamine · delayed effect through an effect compartment | model (no simulator) | Liem-Moolenaar M et al., Pharmacokinetic-pharmacodynamic relatio…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.03936.x](https://doi.org/10.1111/j.1365-2125.2011.03936.x) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Liem-Moolenaar_2011_Smooth_pursuit](drugs/drug_scopolamine/pd_Liem_Moolenaar_2011_Smooth_pursuit.md) | Smooth pursuit ← scopolamine · delayed effect through an effect compartment | model (no simulator) | Liem-Moolenaar M et al., Pharmacokinetic-pharmacodynamic relatio…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.03936.x](https://doi.org/10.1111/j.1365-2125.2011.03936.x) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Liem-Moolenaar_2011_VAS_alertness](drugs/drug_scopolamine/pd_Liem_Moolenaar_2011_VAS_alertness.md) | VAS alertness ← scopolamine · delayed effect through an effect compartment | model (no simulator) | Liem-Moolenaar M et al., Pharmacokinetic-pharmacodynamic relatio…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.03936.x](https://doi.org/10.1111/j.1365-2125.2011.03936.x) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Liem-Moolenaar_2011_VAS_external_perception](drugs/drug_scopolamine/pd_Liem_Moolenaar_2011_VAS_external_perception.md) | VAS external perception ← scopolamine · delayed effect through an effect compartment | model (no simulator) | Liem-Moolenaar M et al., Pharmacokinetic-pharmacodynamic relatio…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.03936.x](https://doi.org/10.1111/j.1365-2125.2011.03936.x) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Liem-Moolenaar_2011_VAS_feeling_high](drugs/drug_scopolamine/pd_Liem_Moolenaar_2011_VAS_feeling_high.md) | VAS feeling high ← scopolamine · delayed effect through an effect compartment | model (no simulator) | Liem-Moolenaar M et al., Pharmacokinetic-pharmacodynamic relatio…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.03936.x](https://doi.org/10.1111/j.1365-2125.2011.03936.x) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Liem-Moolenaar_2011_VAS_internal_perception](drugs/drug_scopolamine/pd_Liem_Moolenaar_2011_VAS_internal_perception.md) | VAS internal perception ← scopolamine · delayed effect through an effect compartment | model (no simulator) | Liem-Moolenaar M et al., Pharmacokinetic-pharmacodynamic relatio…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.03936.x](https://doi.org/10.1111/j.1365-2125.2011.03936.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=scopolamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), CHRNA4 (inducer), CHRNA4 (inhibitor), CHRNB2 (inducer), CHRNB2 (inhibitor), SI (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 118 matched, 30 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alvarez-Jimenez_2016.pdf` | Alvarez-Jimenez R et al., Model-based exposure-response analysis…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.13031](https://doi.org/10.1111/bcp.13031) | [27273555](https://pubmed.ncbi.nlm.nih.gov/27273555) | The abstract explicitly reports quantitative population PK parameters (V1, V2, CL) for scopolamine in a two-compartment model. |
| `Ebert_2001.pdf` | Ebert U et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of clinical pharmac… (2001) | popPK | 10 | [10.1177/00912700122009836](https://doi.org/10.1177/00912700122009836) | [11144994](https://pubmed.ncbi.nlm.nih.gov/11144994) | The study reports quantitative pharmacokinetic parameters (CL, Vd, half-lives) for scopolamine in humans. |
| `Chen_2025.pdf` | Chen JCC et al., Scopolamine's Anticholinergic Effects o…, Human psychopharmacology (2025) | pd | 5 | [10.1002/hup.70022](https://doi.org/10.1002/hup.70022) | [41122044](https://www.ncbi.nlm.nih.gov/pubmed/41122044) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Marquart_2019.pdf` | Marquart K et al., Human small bowel as model for poisonin…, Toxicology in vitro : an in… (2019) | pd | 5 | [10.1016/j.tiv.2019.02.010](https://doi.org/10.1016/j.tiv.2019.02.010) | [30763608](https://www.ncbi.nlm.nih.gov/pubmed/30763608) | metadata signals extractable PD data (EC50) |
| `Long_2014.pdf` | Long Z et al., Amide alkaloids from Scopolia tangutica, Planta medica (2014) | pd | 4 | [10.1055/s-0034-1382961](https://doi.org/10.1055/s-0034-1382961) | [25127021](https://www.ncbi.nlm.nih.gov/pubmed/25127021) | metadata signals extractable PD data (EC50) |
| `Guay_2003.pdf` | Guay DR, Clinical pharmacokinetics of drugs used…, Clinical pharmacokinetics (2003) | pgx | 8 | [10.2165/00003088-200342140-00004](https://doi.org/10.2165/00003088-200342140-00004) | [14606931](https://www.ncbi.nlm.nih.gov/pubmed/14606931) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-04T14:45:46.613776+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Calder_2025 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of BDNF levels, not a pharmacokinetic study, and contains no PK parameters for scopolamine. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PD | Chen_2025 | not_relevant | 0 | 0 | The paper analyzes EEG and HRV effects of scopolamine but does not report a quantitative exposure-response or dose-response relationship with numeric PD parameters (e.g., EC50, Emax) or a concentration-effect curve. |
| PGx | Coleman_2004 | not_relevant | 0 | 0 | The study investigates muscarinic receptor subtypes in a specific mouse strain (C57BL/6J) but does not report a pharmacogenomic effect (gene variant/genotype) on scopolamine's PK or PD parameters. |
| PGx | Geerts_2018 | not_relevant | 2 | 5 | The paper models the effect of amyloid-beta load (a disease biomarker/pathology) on scopolamine pharmacodynamics, not the effect of a specific gene variant or genotype. |
| PGx | Guay_2003 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for tolterodine (CYP2D6) but only mentions scopolamine in a general list of drugs without providing any pharmacokinetic or pharmacodynamic data for it. |
| popPK | Kumar_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a novel D5 receptor agonist (compound 5j), using scopolamine only as a tool to induce amnesia in a behavioral model. |
| PD | Kumar_2024 | not_relevant | 0 | 0 | The paper reports an EC50 for a D5 receptor agonist (compound 5j) in vitro, but does not report a pharmacodynamic or exposure-response relationship for scopolamine; scopolamine is only used as a tool to induce amnesia in the behavioral assay. |
| popPK | Long_2014 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PD | Long_2014 | not_relevant | 0 | 0 | The paper focuses on the isolation and structural characterization of amide alkaloids from Scopolia tangutica, not on pharmacodynamic or exposure-response modeling. |
| popPK | Ma_2024 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of 5α-Epoxyalantolactone in a scopolamine-induced Alzheimer's disease model, but does not report pharmacokinetic parameters for scopolamine. |
| PD | Ma_2024 | not_relevant | 0 | 0 | The paper investigates the effects of 5α-EAL, not scopolamine; scopolamine is used only as a tool to induce the disease model, and no PD parameters for scopolamine are reported. |
| PGx | Majhi_2024 | not_relevant | 0 | 0 | The paper investigates the effect of a plant extract (Tinospora cordifolia) on dextromethorphan pharmacokinetics, not the effect of a gene variant/genotype on scopolamine. |
| popPK | Marquart_2019 | irrelevant | 0 | 0 | no_text gate: only 72 chars of text extracted (&lt; 400) |
| PD | Marquart_2019 | not_relevant | 0 | 0 | The paper focuses on organophosphorus poisoning in a human small bowel model and does not report pharmacodynamic or exposure-response data for scopolamine. |
| popPK | Miravalles_2026 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the antidepressant efficacy and safety of scopolamine, reporting no pharmacokinetic parameters. |
| popPK | Nabulsi_2019 | irrelevant | 0 | 0 | The study evaluates the PET tracer 11C-LSN3172176, using scopolamine only as a blocking agent to demonstrate receptor specificity, and does not report pharmacokinetic parameters for scopolamine itself. |
| popPK | Nowakowska_1996 | irrelevant | 0 | 0 | Scopolamine is used only as a comparator agent to induce amnesia in a behavioral study of fluoxetine, with no pharmacokinetic parameters reported. |
| popPK | Nowakowska_1999 | irrelevant | 0 | 0 | The study focuses on the behavioral effects of mirtazapine, using scopolamine only as a tool to induce memory impairment, with no pharmacokinetic parameters reported. |
| PGx | Oliverio_1973 | not_relevant | 0 | 0 | The paper investigates the genetic basis of behavioral responses to scopolamine, not the pharmacokinetic or pharmacodynamic parameters of the drug itself. |
| popPK | Scheinin_1999 | irrelevant | 2 | 0 | The study focuses on PK-PD modeling for atropine and glycopyrrolate, with scopolamine serving as a comparator where specific quantitative PK parameters (CL, V, etc.) are not reported in the evidence. |
| popPK | Shimosato_2001 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice using scopolamine as a comparator agent, with no pharmacokinetic parameters reported. |
| popPK | Swaminathan_2020 | irrelevant | 2 | 2 | The study reports transdermal release rates and total drug released (in vivo release kinetics) rather than standard systemic disposition parameters like clearance, volume of distribution, or half-life. |
| PGx | Ullrich_2016 | not_relevant | 0 | 0 | The paper analyzes plant metabolomics and alkaloid content in Duboisia species, not human pharmacogenomics or PK/PD parameters of scopolamine. |
| popPK | Xia_2016 | irrelevant | 0 | 0 | The study is a mechanistic/pharmacological investigation of insect muscarinic receptors where scopolamine is used only as a blocking agent, with no pharmacokinetic parameters reported. |
| PD | Xia_2016 | not_relevant | 1 | 1 | The paper reports a qualitative observation that scopolamine blocked acetylcholine responses at a single high concentration (100 μM) in a cell-based assay, without providing a dose-response curve or numeric PD parameters for scopolamine. |
| popPK | Zajdel_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of a novel 5-HT compound (PZKKN-94) in rats, using scopolamine only as a tool to induce cognitive deficits, with no PK parameters reported for scopolamine. |
| PD | Zajdel_2025 | not_relevant | 0 | 0 | The paper focuses on a novel compound (PZKKN-94) and only mentions scopolamine as a tool to induce learning deficits, without reporting any pharmacodynamic or exposure-response parameters for scopolamine itself. |
| PGx | Łażewska_2018 | not_relevant | 0 | 0 | The paper reports the synthesis and pharmacological evaluation of novel histamine H3 receptor ligands, using scopolamine only as a tool to induce memory deficits, and contains no pharmacogenomic data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 14:46 UTC</sub>
