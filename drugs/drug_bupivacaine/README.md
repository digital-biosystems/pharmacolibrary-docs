<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01B&quot;,&quot;href&quot;:&quot;atc/N01B.md&quot;},{&quot;label&quot;:&quot;bupivacaine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bupivacaine_Araneda2025_reference&quot;,&quot;label&quot;:&quot;Araneda_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bupivacaine/Bupivacaine_Araneda2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bupivacaine_Venkatachalam2022_reference&quot;,&quot;label&quot;:&quot;Venkatachalam_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bupivacaine/Bupivacaine_Venkatachalam2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# bupivacaine

- **generic name:** bupivacaine
- **ATC codes:** `N01BB01`, `N01BB59`
- **DrugBank:** [DB00297](https://go.drugbank.com/drugs/DB00297) · **PubChem:** [CID 2474](https://pubchem.ncbi.nlm.nih.gov/compound/2474)
- **molar mass:** 288.4277 g/mol (C18H28N2O) — DrugBank
- **groups:** approved, investigational

## About

Bupivacaine is a local anesthetic used to relieve pain, especially acute pain. It is widely used, is on the WHO list of essential medicines, and has an authorised product in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422806](https://www.wikidata.org/wiki/Q422806) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bupivacaine | parent | 288.428 | C18H28N2O | DrugBank | [2474](https://pubchem.ncbi.nlm.nih.gov/compound/2474) | Araneda_2025, Eljebari_2014, Storgaard_2024 |
| levobupivacaine | metabolite | 288.435 | C18H28N2O | PubChem | [92253](https://pubchem.ncbi.nlm.nih.gov/compound/92253) | Araneda_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:57 | 2:01 | 2/1/1 | 5/0/1 | 0/0/0 | 210,500/22,173 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Araneda_2025_reference](drugs/drug_bupivacaine/Bupivacaine_Araneda2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Araneda A et al., Pharmacokinetic modelling and simulatio…, British journal of anaesthe… (2025) | [10.1016/j.bja.2025.05.047](https://doi.org/10.1016/j.bja.2025.05.047) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span> | [Venkatachalam_2022_reference](drugs/drug_bupivacaine/Bupivacaine_Venkatachalam2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Venkatachalam D et al., Pharmacokinetics and efficacy of a nove…, Frontiers in veterinary sci… (2022) | [10.3389/fvets.2022.1060951](https://doi.org/10.3389/fvets.2022.1060951) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Eljebari_2014_reference](drugs/drug_bupivacaine/Bupivacaine_Eljebari2014_reference.md) | — | 1-compartment (no model) | 6 | Eljebari H et al., Population pharmacokinetics of bupivaca…, Indian journal of pharmacol… (2014) | [10.4103/0253-7613.129318](https://doi.org/10.4103/0253-7613.129318) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Storgaard_2024_reference](drugs/drug_bupivacaine/Bupivacaine_Storgaard2024_reference.md) | — | 1-compartment (no model) | 0 | Storgaard IK et al., Population pharmacokinetic-pharmacodyna…, Basic & clinical pharmacolo… (2024) | [10.1111/bcpt.14004](https://doi.org/10.1111/bcpt.14004) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Lemoine_2016_time_to_hospital_discharge](drugs/drug_bupivacaine/pd_Lemoine_2016_time_to_hospital_discharge.md) | time to hospital discharge ← bupivacaine · direct Emax (saturable) effect | — | Lemoine A et al., Modelling of the optimal bupivacaine do…, European journal of anaesth… (2016) | [10.1097/EJA.0000000000000528](https://doi.org/10.1097/EJA.0000000000000528) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lemoine_2016_time_to_recovery_of_motor_function](drugs/drug_bupivacaine/pd_Lemoine_2016_time_to_recovery_of_motor_function.md) | time to recovery of motor function ← bupivacaine · direct Emax (saturable) effect | — | Lemoine A et al., Modelling of the optimal bupivacaine do…, European journal of anaesth… (2016) | [10.1097/EJA.0000000000000528](https://doi.org/10.1097/EJA.0000000000000528) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Makdessi_2015_peak_calcium_responses_to_ET_1](drugs/drug_bupivacaine/pd_Makdessi_2015_peak_calcium_responses_to_ET_1.md) | peak calcium responses to ET-1 ← bupivacaine · direct Emax (saturable) effect | — | Makdessi MJ et al., Bupivacaine inhibits endothelin-1-evoke…, Acta anaesthesiologica Scan… (2015) | [10.1111/aas.12481](https://doi.org/10.1111/aas.12481) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Punke_2003_TREK_1_channels](drugs/drug_bupivacaine/pd_Punke_2003_TREK_1_channels.md) | TREK-1 channels ← bupivacaine · direct sigmoid Emax (Hill) effect | — | Punke MA et al., Inhibition of human TREK-1 channels by…, Anesthesia and analgesia (2003) | [10.1213/01.ANE.0000062524.90936.1F](https://doi.org/10.1213/01.ANE.0000062524.90936.1F) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Punke_2003_mp](drugs/drug_bupivacaine/pd_Punke_2003_mp.md) | membrane potential ← bupivacaine · direct sigmoid Emax (Hill) effect | — | Punke MA et al., Inhibition of human TREK-1 channels by…, Anesthesia and analgesia (2003) | [10.1213/01.ANE.0000062524.90936.1F](https://doi.org/10.1213/01.ANE.0000062524.90936.1F) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Schnider_1996_level_of_central_neural_blockade](drugs/drug_bupivacaine/pd_Schnider_1996_level_of_central_neural_blockade.md) | level of central neural blockade ← bupivacaine · direct Emax (saturable) effect | — | Schnider TW et al., Population pharmacodynamic modeling and…, Anesthesiology (1996) | [10.1097/00000542-199609000-00009](https://doi.org/10.1097/00000542-199609000-00009) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Storgaard_2024_WDT](drugs/drug_bupivacaine/pd_Storgaard_2024_WDT.md) | warmth detection threshold ← bupivacaine · direct linear effect | model (no simulator) | Storgaard IK et al., Population pharmacokinetic-pharmacodyna…, Basic & clinical pharmacolo… (2024) | [10.1111/bcpt.14004](https://doi.org/10.1111/bcpt.14004) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [He_2026_Block_success](drugs/drug_bupivacaine/pd_He_2026_Block_success.md) | Block success ← liposomal bupivacaine · categorical (graded) response model | — | He T et al., Median effective concentration of lipos…, BMC anesthesiology (2026) | [10.1186/s12871-026-03834-8](https://doi.org/10.1186/s12871-026-03834-8) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bupivacaine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PTGER1 (other/unknown), SCN10A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 103 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 2  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Araneda_2025.pdf` | Araneda A et al., Pharmacokinetic modelling and simulatio…, British journal of anaesthe… (2025) | popPK | 9 | [10.1016/j.bja.2025.05.047](https://doi.org/10.1016/j.bja.2025.05.047) | [40640046](https://pubmed.ncbi.nlm.nih.gov/40640046) | The study reports quantitative PK parameters (V, CL, t1/2) for bupivacaine/levobupivacaine in humans, with specific numeric values present in the abstract/results text. |
| `Grindy_2023.pdf` | Grindy S et al., Hydrogel device for analgesic drugs wit…, Journal of controlled relea… (2023) | popPK | 8 | [10.1016/j.jconrel.2023.07.022](https://doi.org/10.1016/j.jconrel.2023.07.022) | [37451545](https://pubmed.ncbi.nlm.nih.gov/37451545) | The study reports pharmacokinetic parameters estimated from an in-vitro elution model for bupivacaine, but the specific numeric values are not explicitly listed in the provided evidence text. |

<sub>queue written 2026-10-07T03:55:37.296963+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berven_2024 | irrelevant | 0 | 0 | The study evaluates clinical outcomes (opioid use, resource utilization) of liposomal bupivacaine, not pharmacokinetic parameters. |
| popPK | Davoud_2025 | irrelevant | 0 | 0 | The study focuses on a pharmacodynamic model for blood pressure prediction using bupivacaine as a co-administered agent, not on bupivacaine's pharmacokinetic disposition parameters. |
| popPK | Grindy_2023 | relevant | 8 | 2 | The study reports pharmacokinetic parameters estimated from an in-vitro elution model for bupivacaine, but the specific numeric values are not explicitly listed in the provided evidence text. |
| popPK | He_2026 | irrelevant | 0 | 0 | This is a clinical dose-finding study determining the EC50 for regional anesthesia, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Knackstedt_2024 | irrelevant | 0 | 0 | The study is a retrospective claims analysis focusing on clinical outcomes (opioid use and resource utilization) and does not report any pharmacokinetic parameters (clearance, volume, half-life, etc.) for bupivacaine. |
| popPK | Lemoine_2016 | irrelevant | 2 | 1 | The paper reports pharmacodynamic parameters (motor block duration, D50, Emax) from a systematic review of clinical trials, not quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| popPK | Makdessi_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of bupivacaine's effect on intracellular calcium transients in cells, reporting no pharmacokinetic disposition parameters. |
| popPK | Malinovsky_1999 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (E50, motor block duration) rather than quantitative population pharmacokinetic parameters (CL, V, ka) for bupivacaine. |
| popPK | Mazoit_2006 | irrelevant | 1 | 0 | The paper is a general review of pediatric anesthetic PK/PD and mentions bupivacaine only qualitatively (low clearance in infants) without providing specific numeric parameter values or a dedicated bupivacaine model. |
| popPK | Perez-Castro_2009 | irrelevant | 0 | 0 | This is an in vitro cytotoxicity and mechanistic study of local anesthetics, not a pharmacokinetic study, and it reports toxicity metrics (LD50, caspase activation) rather than disposition parameters like clearance or volume. |
| popPK | Punke_2003 | irrelevant | 0 | 0 | The study is an in vitro mechanistic patch-clamp investigation of bupivacaine's effect on ion channels, reporting no pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Schnider_1996 | irrelevant | 1 | 8 | The paper reports quantitative pharmacodynamic parameters (onset/offset rates, max effect) for central neural blockade, not standard pharmacokinetic disposition parameters (CL, V, ka) for bupivacaine. |
| popPK | Song_2026 | irrelevant | 0 | 0 | The paper is a clinical outcomes study (retrospective cohort) evaluating pain scores and opioid consumption, not a pharmacokinetic study, and contains no PK parameters (CL, V, etc.) for bupivacaine. |
| popPK | Wallace_2023 | irrelevant | 0 | 0 | The paper is an in vitro microbial growth study and does not report pharmacokinetic parameters (CL, V, etc.) for bupivacaine. |
| popPK | Youn_2025 | irrelevant | 0 | 0 | This is a clinical trial assessing the analgesic efficacy (pain scores) of liposomal bupivacaine, not a pharmacokinetic study reporting quantitative disposition parameters such as clearance, volume of distribution, or half-life. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:55 UTC</sub>
