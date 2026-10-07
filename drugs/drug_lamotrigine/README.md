<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;lamotrigine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lamotrigine_Huo2025_base&quot;,&quot;label&quot;:&quot;Huo_2025_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lamotrigine/Lamotrigine_Huo2025_base.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lamotrigine_Huo2025_final&quot;,&quot;label&quot;:&quot;Huo_2025_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lamotrigine/Lamotrigine_Huo2025_final.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# lamotrigine

- **generic name:** lamotrigine
- **ATC codes:** `N03AX09`
- **DrugBank:** [DB00555](https://go.drugbank.com/drugs/DB00555) · **PubChem:** [CID 3878](https://pubchem.ncbi.nlm.nih.gov/compound/3878)
- **molar mass:** 256.091 g/mol (C9H7Cl2N5) — DrugBank
- **groups:** approved, investigational

## About

Lamotrigine is an anticonvulsant used to treat epilepsy and bipolar disorder, and has also been used for other neurological and psychiatric conditions. It is widely used and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410346](https://www.wikidata.org/wiki/Q410346) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lamotrigine | parent | 256.091 | C9H7Cl2N5 | DrugBank | [3878](https://pubchem.ncbi.nlm.nih.gov/compound/3878) | Huo_2025, Karanam_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:04 | 2:49 | 2/3/2 | 3/0/1 | 0/0/0 | 221,103/12,808 | einfracz / qwen3.8-27b | 16 | 11/5 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span> | [Huo_2025_base](drugs/drug_lamotrigine/Lamotrigine_Huo2025_base.md) | ▶ model + simulator | 1-compartment, oral | 3 | Huo J et al., Dosing Optimization of Lamotrigine in P…, Drug design, development an… (2025) | [10.2147/DDDT.S541597](https://doi.org/10.2147/DDDT.S541597) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span> | [Huo_2025_final](drugs/drug_lamotrigine/Lamotrigine_Huo2025_final.md) | ▶ model + simulator | 1-compartment, oral | 3 | Huo J et al., Dosing Optimization of Lamotrigine in P…, Drug design, development an… (2025) | [10.2147/DDDT.S541597](https://doi.org/10.2147/DDDT.S541597) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Karanam_2025_reference](drugs/drug_lamotrigine/Lamotrigine_Karanam2025_reference.md) | — | 1-compartment (no model) | 1 | Karanam A et al., Characterization of lamotrigine disposi…, Pharmacotherapy (2025) | [10.1002/phar.4640](https://doi.org/10.1002/phar.4640) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: not captured</sub> | [Huo_2025_reference](drugs/drug_lamotrigine/Lamotrigine_Huo2025_reference.md) | — | — (no model) | 0 | Huo J et al., Dosing Optimization of Lamotrigine in P…, Drug design, development an… (2025) | [10.2147/DDDT.S541597](https://doi.org/10.2147/DDDT.S541597) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chan_2001_reference](drugs/drug_lamotrigine/Lamotrigine_Chan2001_reference.md) | — | 1-compartment (no model) | 0 | Chan V et al., Population pharmacokinetics of lamotrig…, Therapeutic drug monitoring (2001) | [10.1097/00007691-200112000-00006](https://doi.org/10.1097/00007691-200112000-00006) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Grasela_1999_reference](drugs/drug_lamotrigine/Lamotrigine_Grasela1999_reference.md) | — | 1-compartment (no model) | 0 | Grasela TH et al., Population pharmacokinetics of lamotrig…, Journal of clinical pharmac… (1999) | [10.1177/00912709922007949](https://doi.org/10.1177/00912709922007949) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Methaneethorn_2020_reference](drugs/drug_lamotrigine/Lamotrigine_Methaneethorn2020_reference.md) | — | 1-compartment (no model) | 0 | Methaneethorn J et al., Sources of lamotrigine pharmacokinetic…, Seizure (2020) | [10.1016/j.seizure.2020.07.014](https://doi.org/10.1016/j.seizure.2020.07.014) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Calabresi_2000_corticostriatal_potential](drugs/drug_lamotrigine/pd_Calabresi_2000_corticostriatal_potential.md) | corticostriatal potential ← lamotrigine · direct sigmoid Emax (Hill) effect | — | Calabresi P et al., Is pharmacological neuroprotection depe…, Stroke (2000) | [10.1161/01.str.31.3.766](https://doi.org/10.1161/01.str.31.3.766) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Della_2000_TGS](drugs/drug_lamotrigine/pd_Della_2000_TGS.md) | generalized seizure threshold ← lamotrigine · stimulation effect | — | Della Paschoa OE et al., Pharmacokinetic-pharmacodynamic correla…, Epilepsy research (2000) | [10.1016/s0920-1211(00)00102-9](https://doi.org/10.1016/s0920-1211(00)00102-9) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Della_2000_TLS](drugs/drug_lamotrigine/pd_Della_2000_TLS.md) | localized seizure threshold ← lamotrigine · stimulation effect | — | Della Paschoa OE et al., Pharmacokinetic-pharmacodynamic correla…, Epilepsy research (2000) | [10.1016/s0920-1211(00)00102-9](https://doi.org/10.1016/s0920-1211(00)00102-9) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kim_2017_peak_amplitude](drugs/drug_lamotrigine/pd_Kim_2017_peak_amplitude.md) | peak amplitude ← lamotrigine · direct sigmoid Emax (Hill) effect | — | Kim KJ et al., Lamotrigine, an antiepileptic drug, inh…, The Korean journal of physi… (2017) | [10.4196/kjpp.2017.21.2.169](https://doi.org/10.4196/kjpp.2017.21.2.169) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kim_2017_peak_amplitude_2](drugs/drug_lamotrigine/pd_Kim_2017_peak_amplitude_2.md) | peak amplitude ← lamotrigine · direct sigmoid Emax (Hill) effect | — | Kim KJ et al., Lamotrigine, an antiepileptic drug, inh…, The Korean journal of physi… (2017) | [10.4196/kjpp.2017.21.2.169](https://doi.org/10.4196/kjpp.2017.21.2.169) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kim_2017_peak_amplitude_3](drugs/drug_lamotrigine/pd_Kim_2017_peak_amplitude_3.md) | peak amplitude ← lamotrigine · direct sigmoid Emax (Hill) effect | — | Kim KJ et al., Lamotrigine, an antiepileptic drug, inh…, The Korean journal of physi… (2017) | [10.4196/kjpp.2017.21.2.169](https://doi.org/10.4196/kjpp.2017.21.2.169) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kim_2017_rise_slope](drugs/drug_lamotrigine/pd_Kim_2017_rise_slope.md) | rise slope ← lamotrigine · direct sigmoid Emax (Hill) effect | — | Kim KJ et al., Lamotrigine, an antiepileptic drug, inh…, The Korean journal of physi… (2017) | [10.4196/kjpp.2017.21.2.169](https://doi.org/10.4196/kjpp.2017.21.2.169) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Castel-Branco_2005_anticonvulsant_profile_against_maximal_electroshock_seizure_stimulation](drugs/drug_lamotrigine/pd_Castel_Branco_2005_anticonvulsant_profile_against_maximal_el.md) | anticonvulsant profile against maximal electroshock seizure stimulation ← lamotrigine · direct sigmoid Emax (Hill) effect | model (no simulator) | Castel-Branco MM et al., Lamotrigine pharmacokinetic/pharmacodyn…, Fundamental & clinical phar… (2005) | [10.1111/j.1472-8206.2005.00380.x](https://doi.org/10.1111/j.1472-8206.2005.00380.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lamotrigine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | liver | `SLC22A1` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADORA1 (inhibitor), ADORA2A (inhibitor), ADRA1A (inhibitor), ADRA2A (inhibitor), ADRB1 (inhibitor), CACNA1E (inhibitor), CHRNA1 (inhibitor), DHFR (inhibitor), DRD1 (inhibitor), DRD2 (inhibitor), DRD2 (target), GABRA1 (inducer), GABRA1 (inhibitor), GABRA1 (target), GRIA1 (inhibitor), HRH1 (target), HTR2A (inhibitor), HTR3A (inhibitor), OPRK1 (inhibitor), SCN11A (blocker), SCN1A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 100 matched, 20 returned
- **screened:** 20  ·  **relevant:** 6
- **records:** 7  ·  extracted 2  ·  needs_review 1  ·  rejected 3  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Castel-Branco_2005.pdf` | Castel-Branco MM et al., Lamotrigine pharmacokinetic/pharmacodyn…, Fundamental & clinical phar… (2005) | popPK | 10 | [10.1111/j.1472-8206.2005.00380.x](https://doi.org/10.1111/j.1472-8206.2005.00380.x) | [16313279](https://pubmed.ncbi.nlm.nih.gov/16313279) | The study reports quantitative PK parameters (Vd, kabs, kel) for lamotrigine in rats, with values explicitly listed in the abstract. |
| `Chan_2001.pdf` | Chan V et al., Population pharmacokinetics of lamotrig…, Therapeutic drug monitoring (2001) | popPK | 10 | [10.1097/00007691-200112000-00006](https://doi.org/10.1097/00007691-200112000-00006) | [11802095](https://pubmed.ncbi.nlm.nih.gov/11802095) | The study is a population PK analysis of lamotrigine in humans, and the abstract provides specific numeric values for apparent clearance (2.14 L/h) and volume of distribution (78.1 L/kg). |
| `Grasela_1999.pdf` | Grasela TH et al., Population pharmacokinetics of lamotrig…, Journal of clinical pharmac… (1999) | popPK | 10 | [10.1177/00912709922007949](https://doi.org/10.1177/00912709922007949) | [10197296](https://pubmed.ncbi.nlm.nih.gov/10197296) | The paper reports a population PK model for lamotrigine in humans, and the abstract provides specific quantitative parameter estimates such as the population mean apparent oral clearance (1 mL/min/kg) and effects of covariates. |
| `Yang_2024.pdf` | Yang H et al., Population Pharmacokinetics of Lamotrig…, Therapeutic drug monitoring (2024) | popPK | 10 | [10.1097/FTD.0000000000001207](https://doi.org/10.1097/FTD.0000000000001207) | [38666475](https://pubmed.ncbi.nlm.nih.gov/38666475) | The paper reports a population PK model for lamotrigine, but the specific numeric parameter values (clearance, etc.) are missing from the provided text (indicated by the phrase "were and for" in the abstract). |
| `Ramsay_1991.pdf` | Ramsay RE et al., Pharmacokinetics and safety of lamotrig…, Epilepsy research (1991) | popPK | 9 | [10.1016/0920-1211(91)90012-5](https://doi.org/10.1016/0920-1211(91)90012-5) | [1817959](https://pubmed.ncbi.nlm.nih.gov/1817959) | The abstract explicitly reports quantitative mean pharmacokinetic parameters for lamotrigine (half-life, volume of distribution, and clearance). |

<sub>queue written 2026-10-07T07:02:13.068919+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barbieri_2003 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro and in-vivo investigation of CHF3381 using lamotrigine only as a positive control for sodium channel blockade, with no pharmacokinetic parameters reported for lamotrigine. |
| popPK | Calabresi_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological experiment on rat brain slices investigating neuroprotection and glutamate release, not a pharmacokinetic study of lamotrigine. |
| popPK | Citraro_2016 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic interactions and seizure severity in mice, explicitly stating that plasma and brain levels of AEDs (including lamotrigine) were not significantly influenced, and no quantitative PK parameters (CL, V, t1/2) are reported. |
| popPK | Della_2000 | irrelevant | 2 | 0 | The study is a PK-PD modeling paper that describes the methods but does not provide specific quantitative lamotrigine PK parameter values in the text, and the evidence suggests no numeric data is present. |
| popPK | Falcão_2012 | irrelevant | 1 | 0 | The study focuses on the population PK of eslicarbazepine, reporting only a minor change in lamotrigine clearance as a secondary outcome without providing quantitative PK parameter values for lamotrigine. |
| popPK | Jia_2025 | irrelevant | 4 | 0 | The study performs external validation of published models but does not report original quantitative PK parameter estimates (CL, V, etc.) in the provided evidence, only validation metrics. |
| popPK | Kim_2017 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology paper investigating lamotrigine's effect on 5-HT3 receptor currents in NCB-20 cells, not a pharmacokinetic study. |
| popPK | Kumar_2020 | irrelevant | 0 | 0 | The study uses lamotrigine as a kindling agent to establish a drug-resistant epilepsy model and reports no compartmental PK parameters (CL, V, ka) or quantitative disposition values, only comparing relative bioavailability levels without numeric data. |
| popPK | Methaneethorn_2020 | irrelevant | 8 | 2 | This is a systematic review that summarizes ranges of PK parameters (CL, Vd, Ka) from 19 studies but does not report specific population PK model parameters (e.g., typical values with RSEs) for a single model, and the detailed numeric values for the included studies are in the tables of the original papers, not fully extracted here. |
| popPK | Shah_2021 | irrelevant | 3 | 4 | The study reports gamma scintigraphy biodistribution metrics (AUC in %radioactivity/g, T1/2) in animals rather than standard quantitative compartmental pharmacokinetic parameters (CL, V, Q) or population PK models for lamotrigine. |
| popPK | Tompson_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of retigabine, with lamotrigine serving only as a co-administered drug affecting retigabine's clearance. |
| popPK | Vivekanandam_2024 | irrelevant | 0 | 0 | This is a clinical efficacy trial comparing mexiletine and lamotrigine for myotonia, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.). |
| popPK | Walsh_2021 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment characterizing lamotrigine's mechanism of action on ion channels, reporting no pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Yang_2024 | relevant | 10 | 0 | The paper reports a population PK model for lamotrigine, but the specific numeric parameter values (clearance, etc.) are missing from the provided text (indicated by the phrase "were and for" in the abstract). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:02 UTC</sub>
