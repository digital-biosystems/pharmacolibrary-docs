<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;oxycodone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxycodone_Morse2021_reference&quot;,&quot;label&quot;:&quot;Morse_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxycodone/Oxycodone_Morse2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxycodone_Shi2026_reference&quot;,&quot;label&quot;:&quot;Shi_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxycodone/Oxycodone_Shi2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# oxycodone

- **generic name:** oxycodone
- **ATC codes:** `N02AA05`, `N02AA55`, `N02AA56`, `N02AJ17`, `N02AJ18`, `N02AJ19`
- **DrugBank:** [DB00497](https://go.drugbank.com/drugs/DB00497) · **PubChem:** [CID 5284603](https://pubchem.ncbi.nlm.nih.gov/compound/5284603)
- **molar mass:** 315.3636 g/mol (C18H21NO4) — DrugBank
- **groups:** approved, illicit, investigational

## About

Oxycodone is an opioid painkiller used to treat pain, including pain from injury and conditions such as fibromyalgia. It is widely used and appears on the WHO list of essential medicines, though it carries a boxed warning and is also misused illicitly.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407535](https://www.wikidata.org/wiki/Q407535) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| oxycodone | parent | 315.364 | C18H21NO4 | DrugBank | [5284603](https://pubchem.ncbi.nlm.nih.gov/compound/5284603) | Ladebo_2020, Morse_2021, Saari_2012 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:58 | 2:54 | 2/4/0 | 2/0/0 | 0/0/0 | 166,181/9,083 | einfracz / qwen3.8-27b | 17 | 5/2 | 6/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Morse_2021_reference](drugs/drug_oxycodone/Oxycodone_Morse2021_reference.md) | ▶ model + simulator | 2-compartment, IV | 8 | Morse JD et al., Population pharmacokinetics of oxycodon…, Paediatric anaesthesia (2021) | [10.1111/pan.14283](https://doi.org/10.1111/pan.14283) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Shi_2026_reference](drugs/drug_oxycodone/Oxycodone_Shi2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Shi S et al., Pharmacokinetics of intravenous oxycodo…, Frontiers in medicine (2026) | [10.3389/fmed.2026.1834903](https://doi.org/10.3389/fmed.2026.1834903) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chaw_2023_reference](drugs/drug_oxycodone/Oxycodone_Chaw2023_reference.md) | — | 1-compartment (no model) | 0 | Chaw SH et al., Population Pharmacokinetics and Dosing…, European journal of drug me… (2023) | [10.1007/s13318-022-00795-4](https://doi.org/10.1007/s13318-022-00795-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Ladebo_2020_reference](drugs/drug_oxycodone/Oxycodone_Ladebo2020_reference.md) | — | 1-compartment (no model) | 6 | Ladebo L et al., Population pharmacokinetic-pharmacodyna…, Basic & clinical pharmacolo… (2020) | [10.1111/bcpt.13330](https://doi.org/10.1111/bcpt.13330) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.474). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Saari_2012_covariate_model](drugs/drug_oxycodone/Oxycodone_Saari2012_covariate_model.md) | — | 1-compartment (no model) | 7 | Saari TI et al., Oxycodone clearance is markedly reduced…, British journal of anaesthe… (2012) | [10.1093/bja/aer395](https://doi.org/10.1093/bja/aer395) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.474). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Saari_2012_population_estimates](drugs/drug_oxycodone/Oxycodone_Saari2012_population_estimates.md) | — | 1-compartment (no model) | 7 | Saari TI et al., Oxycodone clearance is markedly reduced…, British journal of anaesthe… (2012) | [10.1093/bja/aer395](https://doi.org/10.1093/bja/aer395) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ing_2012_analgesic_effect](drugs/drug_oxycodone/pd_Ing_2012_analgesic_effect.md) | analgesic effect ← oxycodone · direct linear effect | — | Ing Lorenzini K et al., Pharmacokinetic-pharmacodynamic modelli…, Basic & clinical pharmacolo… (2012) | [10.1111/j.1742-7843.2011.00814.x](https://doi.org/10.1111/j.1742-7843.2011.00814.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ing_2012_somatic_pain](drugs/drug_oxycodone/pd_Ing_2012_somatic_pain.md) | somatic pain ← oxycodone · delayed effect through an effect compartment | — | Ing Lorenzini K et al., Pharmacokinetic-pharmacodynamic modelli…, Basic & clinical pharmacolo… (2012) | [10.1111/j.1742-7843.2011.00814.x](https://doi.org/10.1111/j.1742-7843.2011.00814.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ing_2012_visceral_pain](drugs/drug_oxycodone/pd_Ing_2012_visceral_pain.md) | visceral pain ← oxycodone · direct linear effect | — | Ing Lorenzini K et al., Pharmacokinetic-pharmacodynamic modelli…, Basic & clinical pharmacolo… (2012) | [10.1111/j.1742-7843.2011.00814.x](https://doi.org/10.1111/j.1742-7843.2011.00814.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Nallani_2022_drug_liking](drugs/drug_oxycodone/pd_Nallani_2022_drug_liking.md) | drug liking ← oxycodone · direct sigmoid Emax (Hill) effect | — | Nallani SC et al., Concentration-Response Model of Immedia…, Pain medicine (Malden, Mass… (2022) | [10.1093/pm/pnab339](https://doi.org/10.1093/pm/pnab339) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxycodone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CACNA1B (inhibitor), OPRD1 (target), OPRK1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 95 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 6  ·  extracted 2  ·  needs_review 0  ·  rejected 4  ·  stale 6
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chaw_2023.pdf` | Chaw SH et al., Population Pharmacokinetics and Dosing…, European journal of drug me… (2023) | popPK | 10 | [10.1007/s13318-022-00795-4](https://doi.org/10.1007/s13318-022-00795-4) | [36207565](https://pubmed.ncbi.nlm.nih.gov/36207565) | The paper reports a population PK model for oxycodone with specific quantitative parameters (CL and V) provided directly in the abstract text. |
| `Choi_2017.pdf` | Choi BM et al., Population pharmacokinetics and analges…, British journal of clinical… (2017) | popPK | 10 | [10.1111/bcp.13101](https://doi.org/10.1111/bcp.13101) | [27558774](https://pubmed.ncbi.nlm.nih.gov/27558774) | The study is a population PK analysis of oxycodone in humans, but the specific numeric values for clearance and volume of distribution are described only qualitatively (covariates listed) in the provided evidence, likely residing in tables or figures not included. |
| `Ladebo_2020.pdf` | Ladebo L et al., Population pharmacokinetic-pharmacodyna…, Basic & clinical pharmacolo… (2020) | popPK | 10 | [10.1111/bcpt.13330](https://doi.org/10.1111/bcpt.13330) | [31597014](https://pubmed.ncbi.nlm.nih.gov/31597014) | The paper reports a population PK-PK model for oxycodone in humans with specific numeric values for absorption rate constants (ka), although clearance and volume values are likely in the full text or figures not fully detailed in the abstract. |
| `Morse_2021.pdf` | Morse JD et al., Population pharmacokinetics of oxycodon…, Paediatric anaesthesia (2021) | popPK | 10 | [10.1111/pan.14283](https://doi.org/10.1111/pan.14283) | [34469607](https://pubmed.ncbi.nlm.nih.gov/34469607) | The paper reports a full population pharmacokinetic model for oxycodone with all numeric parameter estimates (CL, V, Q, absorption parameters) explicitly listed in the abstract. |
| `Olsen_2016.pdf` | Olsen R et al., Modelling the PKPD of oxycodone in expe…, European journal of pharmac… (2016) | popPK | 9 | [10.1016/j.ejps.2016.02.021](https://doi.org/10.1016/j.ejps.2016.02.021) | [26946441](https://pubmed.ncbi.nlm.nih.gov/26946441) | The study develops a population PKPD model for oxycodone in humans, but the abstract only reports qualitative findings and does not contain the specific numeric PK parameter values (CL, V, etc.). |
| `Benziger_1997.pdf` | Benziger DP et al., A pharmacokinetic/pharmacodynamic study…, Journal of pain and symptom… (1997) | popPK | 5 | [10.1016/s0885-3924(96)00300-4](https://doi.org/10.1016/s0885-3924(96)00300-4) | [9095564](https://pubmed.ncbi.nlm.nih.gov/9095564) | The study is a PK/PD bioequivalence trial for oxycodone in humans, but the evidence only contains relative bioequivalence statistics (ratios/percentages) and correlation coefficients, lacking absolute quantitative disposition parameters like clearance (CL) or volume (V). |

<sub>queue written 2026-10-07T14:56:38.506387+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agema_2021 | relevant | 10 | 4 | This is a population pharmacokinetic study of oxycodone in humans, but the specific numeric parameter values (clearance, volume, absorption rates) are referenced in "Table 2" which is not included in the provided evidence, leaving only model descriptions and qualitative comparisons. |
| popPK | Alhaj-Suliman_2020 | irrelevant | 0 | 0 | The study is a model-based meta-analysis focused on efficacy (pain relief), safety, and tolerability, not pharmacokinetic disposition parameters like clearance or volume for oxycodone. |
| popPK | Benziger_1997 | relevant | 5 | 2 | The study is a PK/PD bioequivalence trial for oxycodone in humans, but the evidence only contains relative bioequivalence statistics (ratios/percentages) and correlation coefficients, lacking absolute quantitative disposition parameters like clearance (CL) or volume (V). |
| popPK | Choi_2017 | relevant | 10 | 3 | The study is a population PK analysis of oxycodone in humans, but the specific numeric values for clearance and volume of distribution are described only qualitatively (covariates listed) in the provided evidence, likely residing in tables or figures not included. |
| popPK | Dari_2021 | relevant | 9 | 2 | The paper describes a PK-PD model for oxycodone, but the specific numeric parameter values (ka, ke, V) are located in Table 2 and Figure S10, which are not provided in the evidence text. |
| popPK | Hellinga_2023 | irrelevant | 4 | 0 | The paper reports PK/PD modeling parameters (Emax/EC50) but the specific quantitative disposition parameters (CL, V) are not present in the extracted evidence text. |
| popPK | Ing_2012 | irrelevant | 2 | 0 | This is a MiniReview providing a general overview of PK/PD modeling concepts and citing other studies; it does not report original quantitative pharmacokinetic parameters (CL, V, ka) for oxycodone. |
| PD | Ing_2012 | not_relevant | 2 | 0 | The paper is a mini-review that discusses PK/PD concepts and models for opioids, including oxycodone, but does not report specific numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect data for oxycodone in the provided text. |
| popPK | Jansen_2026 | relevant | 8 | 0 | The paper reports the development of a population PK model for oxycodone, but the specific numeric parameter values (CL, V, ka) are not provided in the extracted text or tables, only referenced in supplementary material or figures. |
| popPK | Ji_2021 | irrelevant | 1 | 0 | The study is an in silico PBPK modeling simulation of a drug-drug interaction without reporting specific quantitative population PK parameter estimates (like CL/F or V/F) for oxycodone in the provided text. |
| popPK | Kaiko_1996 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic relationships and AUC comparisons without reporting specific quantitative PK parameters like clearance, volume, or rate constants. |
| popPK | Nallani_2022 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic concentration-response modeling of drug liking rather than reporting quantitative pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Olkkola_2013 | irrelevant | 2 | 0 | The paper is a review of oxycodone's pharmacology and pharmacokinetics, but no original quantitative parameter values (CL, V, ka, etc.) are present in the provided evidence. |
| popPK | Olsen_2016 | relevant | 9 | 2 | The study develops a population PKPD model for oxycodone in humans, but the abstract only reports qualitative findings and does not contain the specific numeric PK parameter values (CL, V, etc.). |
| popPK | Shram_2023 | irrelevant | 1 | 0 | Oxycodone is used only as a positive control for abuse potential, and no quantitative pharmacokinetic parameter values for oxycodone are reported in the provided text. |
| PD | Shram_2023 | not_relevant | 0 | 0 | The paper evaluates the abuse potential of esmethadone using oxycodone as a positive control, but it does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters (e.g., EC50, Emax) for oxycodone itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:56 UTC</sub>
