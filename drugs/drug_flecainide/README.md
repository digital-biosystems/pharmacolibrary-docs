<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;flecainide&quot;}]"></div>

# flecainide

- **generic name:** flecainide
- **ATC codes:** `C01BC04`
- **DrugBank:** [DB01195](https://go.drugbank.com/drugs/DB01195) · **PubChem:** [CID 3356](https://pubchem.ncbi.nlm.nih.gov/compound/3356)
- **molar mass:** 414.3427 g/mol (C17H20F6N2O3) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Flecainide is a class Ic antiarrhythmic used to prevent and treat heart rhythm disorders such as atrial fibrillation. It remains an approved medicine, but it carries a boxed warning, so its use requires caution.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421381](https://www.wikidata.org/wiki/Q421381) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| flecainide | parent | 414.343 | C17H20F6N2O3 | DrugBank | [3356](https://pubchem.ncbi.nlm.nih.gov/compound/3356) | Doki_2006, Sangrador_1989 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 03:51 | 9:17 | 0/3/1 | 3/0/0 | 0/0/0 | 220,941/23,693 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 4/0 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Doki_2006_reference](drugs/drug_flecainide/Flecainide_Doki2006_reference.md) | — | 1-compartment (no model) | 1 | Doki K et al., Effect of CYP2D6 genotype on flecainide…, European journal of clinica… (2006) | [10.1007/s00228-006-0188-x](https://doi.org/10.1007/s00228-006-0188-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bergenholm_2016_reference](drugs/drug_flecainide/Flecainide_Bergenholm2016_reference.md) | — | 1-compartment (no model) | 0 | Bergenholm L et al., PKPD modelling of PR and QRS intervals…, Journal of pharmacological… (2016) | [10.1016/j.vascn.2016.01.002](https://doi.org/10.1016/j.vascn.2016.01.002) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.286). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Doki_2012_reference](drugs/drug_flecainide/Flecainide_Doki2012_reference.md) | — | 1-compartment (no model) | 0 | Doki K et al., CYP2D6 genotype affects age-related dec…, Pharmacogenetics and genomi… (2012) | [10.1097/FPC.0b013e3283588fe5](https://doi.org/10.1097/FPC.0b013e3283588fe5) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Sangrador_1989_reference](drugs/drug_flecainide/Flecainide_Sangrador1989_reference.md) | — | 1-compartment (no model) | 2 | Sangrador G et al., Clinical pharmacokinetics of intravenou…, Journal of clinical pharmac… (1989) | [10.1111/j.1365-2710.1989.tb00252.x](https://doi.org/10.1111/j.1365-2710.1989.tb00252.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [An_2018_Kv_current](drugs/drug_flecainide/pd_An_2018_Kv_current.md) | vascular Kv channel current ← flecainide · direct sigmoid Emax (Hill) effect | — | An JR et al., Inhibition of the voltage-dependent K, Clinical and experimental p… (2018) | [10.1111/1440-1681.13015](https://doi.org/10.1111/1440-1681.13015) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Deneer_2004_QRS](drugs/drug_flecainide/pd_Deneer_2004_QRS.md) | QRS interval changes ← flecainide · direct linear effect | — | Deneer VH et al., Absorption kinetics and pharmacodynamic…, European journal of clinica… (2004) | [10.1007/s00228-004-0831-3](https://doi.org/10.1007/s00228-004-0831-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wang_1995_KATP](drugs/drug_flecainide/pd_Wang_1995_KATP.md) | outward KATP channel current ← flecainide · direct sigmoid Emax (Hill) effect | — | Wang DW et al., Voltage dependent inhibition of ATP sen…, Cardiovascular research (1995) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=flecainide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C9` inhibitor, `CYP2D6` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC47A1` inhibitor/substrate | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: KCNH2 (inhibitor), RYR2 (inhibitor), SCN4A (inhibitor), SCN5A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 31 matched, 31 returned
- **screened:** 7  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 4
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Doki_2006.pdf` | Doki K et al., Effect of CYP2D6 genotype on flecainide…, European journal of clinica… (2006) | popPK | 10 | [10.1007/s00228-006-0188-x](https://doi.org/10.1007/s00228-006-0188-x) | [16944116](https://pubmed.ncbi.nlm.nih.gov/16944116) | The study reports quantitative population PK parameters (CL/F) for flecainide in humans, with specific numeric values provided in the abstract. |
| `Doki_2012.pdf` | Doki K et al., CYP2D6 genotype affects age-related dec…, Pharmacogenetics and genomi… (2012) | popPK | 10 | [10.1097/FPC.0b013e3283588fe5](https://doi.org/10.1097/FPC.0b013e3283588fe5) | [22941032](https://pubmed.ncbi.nlm.nih.gov/22941032) | The paper is a population PK study of flecainide in humans, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text, only percentage changes and covariate effects. |
| `Sangrador_1989.pdf` | Sangrador G et al., Clinical pharmacokinetics of intravenou…, Journal of clinical pharmac… (1989) | popPK | 10 | [10.1111/j.1365-2710.1989.tb00252.x](https://doi.org/10.1111/j.1365-2710.1989.tb00252.x) | [2507556](https://pubmed.ncbi.nlm.nih.gov/2507556) | The study reports quantitative pharmacokinetic parameters (half-life, volume of distribution) for flecainide in humans, with values explicitly stated in the text. |
| `Deneer_2004.pdf` | Deneer VH et al., Absorption kinetics and pharmacodynamic…, European journal of clinica… (2004) | popPK | 9 | [10.1007/s00228-004-0831-3](https://doi.org/10.1007/s00228-004-0831-3) | [15619132](https://pubmed.ncbi.nlm.nih.gov/15619132) | The study reports quantitative pharmacokinetic parameters (Cmax, Tmax, ka) for flecainide in humans, though specific values for clearance or volume are not explicitly listed in the provided text. |
| `Horie_2014.pdf` | Horie A et al., Pharmacokinetic variability of flecaini…, Biopharmaceutics & drug dis… (2014) | popPK | 9 | [10.1002/bdd.1877](https://doi.org/10.1002/bdd.1877) | [24166085](https://pubmed.ncbi.nlm.nih.gov/24166085) | The study reports a one-compartment PK model for flecainide in humans, but the specific numeric parameter values (CL/F, V/F) are not present in the provided evidence text. |
| `Sällström_2014.pdf` | Sällström J et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmacological… (2014) | popPK | 8 | [10.1016/j.vascn.2013.10.001](https://doi.org/10.1016/j.vascn.2013.10.001) | [24140388](https://pubmed.ncbi.nlm.nih.gov/24140388) | The study reports a one-compartment PK model for flecainide in dogs, but the specific numeric parameter values (CL, V, ka) are not present in the provided evidence. |

<sub>queue written 2026-10-06T03:43:38.707788+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abriel_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of flecainide's mechanism of action on sodium channels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Allan_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and electrophysiology of BW A256C, using flecainide only as a comparator agent without reporting its pharmacokinetic parameters. |
| popPK | An_2018 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of flecainide's effect on potassium channels, reporting no pharmacokinetic parameters. |
| popPK | Bergenholm_2016 | irrelevant | 2 | 0 | The study focuses on PKPD modeling of cardiac endpoints (PR/QRS intervals) in dogs, and while flecainide is a test compound, no quantitative PK disposition parameters (CL, V, ka) are reported in the evidence. |
| popPK | Cheng_2017 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ion channel modulation (Ito) in rabbit myocytes, not a pharmacokinetic study, and flecainide is used only as a comparator agent. |
| PD | Cheng_2017 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of NS5806; flecainide is only mentioned as a qualitative comparator for channel discrimination without providing specific numeric PD parameters or concentration-response data for it. |
| popPK | Cros_2012 | irrelevant | 0 | 0 | The study is a cardiac safety assessment (ECG/QRS duration) in dogs, not a pharmacokinetic study, and reports no PK parameters for flecainide. |
| PD | Cros_2012 | not_relevant | 3 | 2 | The paper reports a maximum effect (Emax) for QRS prolongation but does not provide concentration data or an exposure-response relationship, making it a qualitative/maximum-effect analysis rather than a PD model with derivable parameters like EC50. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | The paper is a review of lopinavir/ritonavir pharmacokinetics and only mentions flecainide as a contraindicated drug due to CYP3A4 interactions, providing no PK parameters for flecainide. |
| PD | Cvetkovic_2003 | not_relevant | 0 | 0 | The paper is a review of lopinavir/ritonavir and only mentions flecainide as a contraindicated drug interaction, providing no pharmacodynamic or exposure-response data for flecainide. |
| popPK | Doki_2012 | relevant | 10 | 2 | The paper is a population PK study of flecainide in humans, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text, only percentage changes and covariate effects. |
| popPK | Doki_2018 | irrelevant | 2 | 0 | This is a review article summarizing pharmacogenetic findings; while it mentions a population PK model and clearance decline percentages, it does not provide the specific quantitative PK parameter values (CL, V, etc.) required for extraction. |
| popPK | Gómez_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of drug effects on Kir2.1 channels, not a pharmacokinetic study, and flecainide is only mentioned as a reference drug. |
| popPK | Hoppe_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ion channel modulation, not a pharmacokinetic study, and reports no disposition parameters for flecainide. |
| PD | Hoppe_1998 | not_relevant | 0 | 0 | The study reports no effect of flecainide on the hyperpolarization-activated inward current (If), providing no concentration-effect relationship or numeric PD parameters for the drug. |
| popPK | Horie_2014 | relevant | 9 | 2 | The study reports a one-compartment PK model for flecainide in humans, but the specific numeric parameter values (CL/F, V/F) are not present in the provided evidence text. |
| popPK | Lei_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological characterization of ion channels in rabbit cells, using flecainide only as a pharmacological blocker, and reports no pharmacokinetic parameters. |
| popPK | Lim_2010 | irrelevant | 2 | 0 | The study reports pharmacodynamic (QTc interval) data, not quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for flecainide. |
| popPK | Mitcheson_1999 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of ion channels in rabbit myocytes, not a pharmacokinetic study, and flecainide is used only as a pharmacological tool to characterize current properties. |
| popPK | Ranger_1993 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological and binding study in canine Purkinje fibers, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Seyler_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channels where flecainide is used only as a negative control/comparator, with no pharmacokinetic parameters reported. |
| PD | Seyler_2014 | not_relevant | 0 | 0 | The paper states that flecainide did not significantly modulate K2P currents and provides no numeric PD parameters or concentration-effect data for flecainide. |
| popPK | Smallwood_1989 | irrelevant | 0 | 0 | The study reports electrophysiological effects (Vmax, APD) in isolated canine tissues, not pharmacokinetic disposition parameters. |
| popPK | Sällström_2014 | relevant | 8 | 0 | The study reports a one-compartment PK model for flecainide in dogs, but the specific numeric parameter values (CL, V, ka) are not present in the provided evidence. |
| popPK | Tikhonov_2014 | irrelevant | 0 | 0 | The paper describes in silico homology modeling of flecainide binding to Kv1.5 channels, not pharmacokinetic disposition parameters. |
| PD | Tikhonov_2014 | not_relevant | 0 | 0 | The paper focuses on homology modeling and structural docking of flecainide in the Kv1.5 channel, not on pharmacokinetic or pharmacodynamic exposure-response analysis. |
| popPK | Verotta_1991 | irrelevant | 1 | 0 | The paper focuses on a pharmacodynamic (PD) modeling methodology and explicitly states it is used when PK data are not available, reporting no quantitative PK parameters for flecainide. |
| PD | Verotta_1991 | not_relevant | 4 | 2 | The text describes a semiparametric method and lists flecainide as an application, but the provided abstract does not contain the specific numeric PD parameters (e.g., Emax, EC50, spline coefficients) or the resulting effect-concentration curve data. |
| popPK | Wang_1995 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of channel inhibition, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of hesperetin on potassium channels and does not involve flecainide or pharmacokinetic parameters. |
| PD | Wang_2016 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of hesperetin, not flecainide. |
| popPK | Yonezawa_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mexiletine and amiodarone; flecainide is only mentioned as a comparator in the introduction. |
| popPK | Yue_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ion channel blockade in canine myocytes, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 03:43 UTC</sub>
