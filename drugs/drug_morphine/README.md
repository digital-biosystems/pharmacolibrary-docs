<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;morphine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Morphine_Yang2024_reference&quot;,&quot;label&quot;:&quot;Yang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_morphine/Morphine_Yang2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# morphine

- **generic name:** morphine
- **ATC codes:** `N02AA01`, `N02AG01`
- **DrugBank:** [DB00295](https://go.drugbank.com/drugs/DB00295) · **PubChem:** [CID 5288826](https://pubchem.ncbi.nlm.nih.gov/compound/5288826)
- **molar mass:** 285.3377 g/mol (C17H19NO3) — DrugBank
- **groups:** approved, investigational

## About

Morphine is an opioid painkiller used to treat pain, and also dyspnea and fibromyalgia. It is widely used and appears on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q81225](https://www.wikidata.org/wiki/Q81225) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:30 | 1:03 | 1/1/0 | 1/0/0 | 0/0/0 | 111,528/2,530 | einfracz / qwen3.8-27b | 22 | 9/3 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Yang_2024_reference](drugs/drug_morphine/Morphine_Yang2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Yang TE et al., Mechanistic pharmacokinetic-pharmacodyn…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13215](https://doi.org/10.1002/psp4.13215) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yalcin_2022_reference](drugs/drug_morphine/Morphine_Yalcin2022_reference.md) | — | 1-compartment (no model) | 0 | Yalcin N et al., Population pharmacokinetics in critical…, BMJ paediatrics open (2022) | [10.1136/bmjpo-2022-001512](https://doi.org/10.1136/bmjpo-2022-001512) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Simons_2023_V_E55](drugs/drug_morphine/pd_Simons_2023_V_E55.md) | ventilation at an extrapolated end-tidal Pco 2 of 55 mmHg ← morphine · direct sigmoid Emax (Hill) effect | — | Simons P et al., Respiratory Effects of Biased Ligand Ol…, Anesthesiology (2023) | [10.1097/ALN.0000000000004473](https://doi.org/10.1097/ALN.0000000000004473) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=morphine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` substrate, `UGT1A1` substrate, `UGT1A3` substrate, `UGT2B15` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: LY96 (activator), OPRD1 (target), OPRK1 (target), OPRM1 (target), UGT1A8 (substrate), UGT2B4 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 588 matched, 20 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Linares_2015.pdf` | Linares OA et al., CYP2D6 phenotype-specific codeine popul…, Journal of pain & palliativ… (2015) | popPK | 8 | [10.3109/15360288.2014.997854](https://doi.org/10.3109/15360288.2014.997854) | [25562725](https://pubmed.ncbi.nlm.nih.gov/25562725) | The study reports a population pharmacokinetic pathway model that includes morphine and its metabolites as endogenous components formed from codeine, but specific numeric disposition parameters (CL, V) for morphine are not explicitly listed in the provided text. |

<sub>queue written 2026-10-07T05:29:59.908195+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baarslag_2017_2 | irrelevant | 1 | 0 | The paper is a narrative review of analgesic research in neonates that summarizes findings from other studies (e.g., Lynn, Bouwmeester) without providing original quantitative PK parameter values (CL, V, ka) in the text or tables. |
| popPK | Bardol_2025 | irrelevant | 1 | 0 | The study focuses on pharmacokinetic models for clonidine and midazolam, using morphine only as a background analgesic and co-medication without reporting morphine-specific quantitative disposition parameters. |
| PD | Bardol_2025 | not_relevant | 4 | 2 | The paper reports that no significant effect of morphine was found on the pharmacodynamic endpoint (COMFORT-B score), and while a PK model for morphine was developed, no numeric PD parameters (Emax, EC50) for morphine are reported or derivable. |
| popPK | Ing_2012 | irrelevant | 1 | 0 | The paper is a review article summarizing existing literature and does not present original quantitative pharmacokinetic parameter values for morphine. |
| PD | Ing_2012 | not_relevant | 2 | 0 | The paper is a mini-review that describes PK/PD modeling concepts and summarizes findings from other studies, but it does not present original data or specific numeric PD parameters (e.g., Emax, EC50) for morphine in the provided text. |
| popPK | Johnson_2011 | irrelevant | 2 | 0 | The study is a bioavailability review for a naltrexone-containing abuse deterrent, reporting standard non-compartmental PK metrics (Cmax, AUC) for morphine but lacking the specific quantitative disposition parameters (CL, V, ka, compartmental model) required. |
| PD | Johnson_2011 | not_relevant | 2 | 1 | The paper is a review of bioavailability and safety studies that reports mean peak effect scores (VAS) for different formulations but does not provide a concentration-effect curve, Emax/EC50 parameters, or a formal PK/PD model linking morphine exposure to analgesic or euphoric effects. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The study measures the effect of morphine on isoflurane anesthetic sensitivity (pharmacodynamics) in mice, but does not report any pharmacokinetic parameters (CL, V, ka) for morphine. |
| popPK | Linares_2015 | relevant | 8 | 1 | The study reports a population pharmacokinetic pathway model that includes morphine and its metabolites as endogenous components formed from codeine, but specific numeric disposition parameters (CL, V) for morphine are not explicitly listed in the provided text. |
| PD | Lötsch_2005 | not_relevant | 3 | 2 | The text is a review describing PK/PD modeling principles and citing literature for specific parameters, but it does not report original data or provide a table of numeric PD parameters (Emax, EC50, etc.) for morphine in this specific document. |
| popPK | Martini_2011 | irrelevant | 2 | 1 | The paper is a review of PKPD models that reports pharmacodynamic parameters (ke0, C50) and metabolic fractions for morphine, but lacks original quantitative pharmacokinetic disposition parameters like clearance, volume of distribution, or absorption rate. |
| PD | Martini_2011 | not_relevant | 2 | 0 | The paper is a review article that discusses PK/PD modeling concepts and cites other studies, but it does not present original data or specific numeric PD parameters for morphine in the provided text. |
| popPK | Moss_2023 | irrelevant | 3 | 0 | The study focuses on the pharmacodynamic utility function (efficacy/toxicity C50 values) of oliceridine versus morphine, and does not report quantitative population pharmacokinetic disposition parameters (CL, V, etc.) for morphine. |
| popPK | Norman_1992 | irrelevant | 2 | 0 | The paper is a theoretical/methodological development of one-compartment kinetics using morphine as an illustrative example, but the provided evidence contains no actual numeric pharmacokinetic parameter values. |
| popPK | Obeng_2025 | irrelevant | 0 | 0 | The study characterizes the pharmacological activity (ED50, binding) of fentanyl analogs, using morphine only as a comparator, and does not report pharmacokinetic parameters for morphine. |
| popPK | Packiasabapathy_2020 | irrelevant | 0 | 0 | The paper is a review of the pharmacogenetics of methadone, not morphine, and does not report quantitative disposition parameters for morphine. |
| popPK | Simons_2006 | irrelevant | 3 | 0 | The paper is a review summarizing evidence and modeling approaches for neonatal opioid dosing but does not report original quantitative PK parameter values for morphine in the provided text. |
| popPK | Simons_2023 | relevant | 8 | 2 | The paper is a human population PK/PD study that models morphine disposition, but the specific numeric parameter values are listed in "table 1" which is not included in the provided evidence. |
| popPK | Sverrisdóttir_2015 | irrelevant | 2 | 0 | The paper is explicitly identified as a review of published studies rather than an original research report containing unique primary numeric parameter values for extraction. |
| popPK | Yalcin_2022 | irrelevant | 3 | 2 | The paper is a systematic review that summarizes a single external study (Peters et al.) providing specific PK values for morphine in infants on ECMO, but it is not an original PK study. |
| popPK | Yang_2024 | irrelevant | 2 | 0 | The paper focuses on naloxone PK and uses published morphine PK-PD models as components for simulation, but does not report original quantitative disposition parameter values for morphine in the provided text. |
| PD | Yang_2024 | not_relevant | 4 | 2 | The paper uses published morphine PK/PD models for simulations but does not report or derive new numeric PD parameters for morphine in the text. |
| popPK | Zgierska_2025 | irrelevant | 0 | 0 | This is a clinical trial comparing psychological therapies (MBT vs CBT) for pain management; morphine is used only as a dosage unit (MME) for opioids, not as the subject of a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:29 UTC</sub>
