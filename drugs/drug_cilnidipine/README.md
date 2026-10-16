<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;cilnidipine&quot;}]"></div>

# cilnidipine

- **generic name:** cilnidipine
- **ATC codes:** `C08CA14`
- **DrugBank:** [DB09232](https://go.drugbank.com/drugs/DB09232) · **PubChem:** [CID 5282138](https://pubchem.ncbi.nlm.nih.gov/compound/5282138)
- **molar mass:** 492.528 g/mol (C27H28N2O7) — DrugBank
- **groups:** investigational

## About

Cilnidipine is a dihydropyridine calcium channel blocker with mainly vascular effects, investigated for treating high blood pressure. It is not authorised in the European Union and remains investigational rather than in routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q731525](https://www.wikidata.org/wiki/Q731525) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cilnidipine | parent | 492.528 | C27H28N2O7 | DrugBank | [5282138](https://pubchem.ncbi.nlm.nih.gov/compound/5282138) | Suryawanshi_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:58 | 1:18 | 0/1/0 | 0/0/0 | 0/0/0 | 47,898/932 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/4 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.636), gpt-oss:120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Suryawanshi_2026_reference](drugs/drug_cilnidipine/Cilnidipine_Suryawanshi2026_reference.md) | — | 1-compartment (no model) | 5 | Suryawanshi A et al., Preclinical evaluation of cilnidipine n…, Annales pharmaceutiques fra… (2026) | [10.1016/j.pharma.2026.05.010](https://doi.org/10.1016/j.pharma.2026.05.010) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cilnidipine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CACNA1B (target), CACNA1C (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 29 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Krosuri_2026.pdf` | Krosuri P et al., Pharmacokinetic Studies and Toxicity As…, Cardiovascular & hematologi… (2026) | popPK | 8 | [10.2174/011871529X435644260126080638](https://doi.org/10.2174/011871529X435644260126080638) | [41941298](https://pubmed.ncbi.nlm.nih.gov/41941298) | The study reports non-compartmental PK parameters (t1/2, Tmax, relative bioavailability) for a cilnidipine analogue in rabbits, but specific values for the parent drug cilnidipine are not explicitly listed in the provided text. |
| `Tres_2019.pdf` | Tres F et al., The Effect of Promiscuous Aggregation o…, Pharmaceutical research (2019) | pd | 4 | [10.1007/s11095-019-2713-5](https://doi.org/10.1007/s11095-019-2713-5) | [31654151](https://www.ncbi.nlm.nih.gov/pubmed/31654151) | metadata signals extractable PD data (IC50) |
| `Uneyama_1999.pdf` | Uneyama H et al., Selectivity of dihydropyridines for car…, European journal of pharmac… (1999) | pd | 4 | [10.1016/s0014-2999(99)00237-x](https://doi.org/10.1016/s0014-2999(99)00237-x) | [10408255](https://www.ncbi.nlm.nih.gov/pubmed/10408255) | metadata signals extractable PD data (IC50) |
| `Kumar_2025.pdf` | Kumar M et al., Mechanistic investigation of methadone,…, Inflammopharmacology (2025) | pgx | 7 | [10.1007/s10787-025-01845-4](https://doi.org/10.1007/s10787-025-01845-4) | [40622465](https://www.ncbi.nlm.nih.gov/pubmed/40622465) | metadata signals extractable PGX data (SLC6A3, PK/PD-context) |

<sub>queue written 2026-10-07T02:57:35.760480+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anand_2024 | relevant | 8 | 4 | The study reports quantitative PK parameters (Cmax, Tmax) for cilnidipine in rats, but lacks clearance, volume, or half-life values in the provided text. |
| PD | Anand_2024 | not_relevant | 2 | 0 | The paper reports PK parameters and a qualitative correlation with blood pressure but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response model. |
| popPK | Bahia_2012 | irrelevant | 0 | 0 | The paper is an electrophysiological study of ion channels in sensory neurons where cilnidipine is used only as a pharmacological tool (calcium channel blocker), not as a subject for pharmacokinetic analysis. |
| PD | Bahia_2012 | not_relevant | 2 | 1 | The paper reports an IC50 for external divalent cations (Ca2+/Mg2+) on a novel channel, but cilnidipine is only used as a qualitative blocker (10 µM) to show lack of effect, with no dose-response curve or PD parameters derived for the drug. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any quantitative pharmacokinetic parameters for cilnidipine. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain any specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for cilnidipine. |
| popPK | Diwan_2020 | relevant | 4 | 2 | The study reports non-compartmental PK parameters (Cmax, AUC, MRT, Fabs) for cilnidipine, but lacks the specific compartmental or population PK parameters (CL, V, Q, ka) required for the target extraction. |
| PD | Diwan_2020 | not_relevant | 3 | 2 | The paper reports qualitative pharmacodynamic outcomes (max % decrease in blood pressure and duration) and PK parameters, but does not provide a concentration-effect curve, Emax/EC50, or any numeric PD model parameters. |
| popPK | Diwan_2021 | irrelevant | 2 | 0 | The study reports only bioavailability (Fabs) and pharmacodynamic data, lacking specific quantitative PK parameters like clearance, volume, or half-life. |
| PD | Diwan_2021 | not_relevant | 2 | 1 | The paper reports a comparative pharmacodynamic effect (percent reduction in SBP) between two formulations but does not provide a concentration-effect or dose-response curve, nor does it derive numeric PD parameters like Emax or EC50. |
| popPK | Dorairaj_2026 | irrelevant | 0 | 0 | The study is a clinical trial comparing blood pressure efficacy of three calcium channel blockers and does not report any pharmacokinetic parameters for cilnidipine. |
| PD | Dorairaj_2026 | not_relevant | 0 | 0 | The paper is a clinical comparison of blood pressure outcomes across three drugs without any pharmacokinetic data, concentration-effect modeling, or derivation of PD parameters like Emax or EC50. |
| popPK | Fujii_1997 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of calcium channel inhibition and does not report any pharmacokinetic parameters. |
| popPK | Hao_2022 | irrelevant | 0 | 0 | The paper describes a deep learning framework for drug toxicity prediction and does not report any pharmacokinetic parameters for cilnidipine. |
| PD | Hao_2022 | not_relevant | 0 | 0 | The paper describes a deep learning framework for drug toxicity prediction and does not report any pharmacodynamic or exposure-response data for cilnidipine. |
| popPK | Hermida_2004 | irrelevant | 1 | 0 | The paper is a review of chronotherapy that mentions cilnidipine only in the context of blood pressure effects, without reporting any quantitative pharmacokinetic parameters. |
| PD | Hermida_2004 | not_relevant | 1 | 0 | The text is a review summarizing chronotherapy concepts and mentions qualitative dose-response dependencies for cilnidipine and other drugs, but it does not provide any numeric PD parameters, concentration-effect curves, or specific quantitative data for cilnidipine. |
| popPK | Ikemura_2019 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on CYP2J2 inhibition by antihypertensive drugs and does not report pharmacokinetic parameters for cilnidipine. |
| PD | Ikemura_2019 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (IC50, Ki) for CYP2J2, not pharmacodynamic exposure-response or dose-response relationships for the drug's clinical effect. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The paper is a microbiology study investigating the mechanism of cilnidipine resistance in Brucella bacteria, not a pharmacokinetic study reporting disposition parameters for the drug. |
| popPK | Kim_2025_2 | irrelevant | 0 | 0 | The paper is a microbiology study investigating the genetic basis of Brucella resistance to cilnidipine, not a pharmacokinetic study reporting disposition parameters for the drug. |
| PGx | Kumar_2025 | not_relevant | 0 | 0 | The paper is a network pharmacology study identifying potential molecular targets and pathways for cilnidipine in TBI, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Lee_2014 | irrelevant | 2 | 0 | The study reports only non-compartmental summary statistics (Cmax, AUC) for a drug interaction assessment, lacking the specific compartmental or population PK parameters (CL, V, Q, ka) required for extraction. |
| PD | Lee_2014 | not_relevant | 2 | 1 | The study reports qualitative additive blood pressure effects and PK parameters (AUC, Cmax) but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve for cilnidipine. |
| popPK | Löhn_2002 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of calcium channel binding and does not report pharmacokinetic disposition parameters. |
| popPK | Meshram_2024 | irrelevant | 2 | 0 | The study reports only Cmax values for a formulation comparison and lacks quantitative disposition parameters like clearance, volume, or half-life. |
| PD | Meshram_2024 | not_relevant | 2 | 1 | The paper reports qualitative pharmacodynamic effects (blood pressure maintenance) and PK parameters (Cmax) but does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response/dose-response model. |
| popPK | Ogihara_2009 | irrelevant | 0 | 0 | The paper is a mechanistic study on calcium channel inhibition and pharmacophore modeling, not a pharmacokinetic study, and contains no PK parameters for cilnidipine. |
| PD | Ogihara_2009 | not_relevant | 3 | 2 | The paper reports a single in vitro IC50 value (51.2 nM) for N-type calcium channel inhibition, which is a static potency metric rather than a dynamic pharmacodynamic (exposure-response) or dose-response curve analysis. |
| popPK | Reimão_2010 | irrelevant | 0 | 0 | The study is an in-vitro evaluation of anti-parasitic activity and structure-activity relationships, containing no pharmacokinetic parameters for cilnidipine. |
| popPK | Sharma_2026 | irrelevant | 1 | 0 | The paper is a review article discussing calcium channel blockers generally, and the provided evidence contains no original quantitative pharmacokinetic parameter values for cilnidipine. |
| PD | Sharma_2026 | not_relevant | 1 | 0 | The text is a general review of calcium channel blockers and does not provide specific numeric pharmacodynamic parameters or exposure-response data for cilnidipine. |
| popPK | Shimizu_2021 | irrelevant | 0 | 0 | The paper is a cross-sectional epidemiological study on intracranial aneurysms and does not report any pharmacokinetic parameters for cilnidipine. |
| PD | Shimizu_2021 | not_relevant | 3 | 2 | The study reports an epidemiological dose-response association (odds ratios for rupture risk by dose) rather than a pharmacodynamic exposure-response relationship with numeric PD parameters like Emax or EC50. |
| PD | Suryawanshi_2026 | not_relevant | 2 | 1 | The study reports comparative PK and PD efficacy (blood pressure reduction) between two formulations but does not provide a concentration-effect model, Emax/EC50 parameters, or a dose-response curve. |
| popPK | Takahara_2018 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium channel blocker selectivity on isolated tissues, reporting no pharmacokinetic parameters for cilnidipine. |
| popPK | Tomiyama_2001 | irrelevant | 0 | 0 | The study is a clinical pharmacodynamic trial comparing platelet activation and sympathetic markers, not a pharmacokinetic study reporting disposition parameters for cilnidipine. |
| PD | Tomiyama_2001 | not_relevant | 2 | 1 | The study compares clinical effects (platelet activation, catecholamines) between two drugs but does not report drug concentrations or fit a concentration-effect/dose-response model to derive PD parameters like Emax or EC50. |
| popPK | Tres_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug aggregation effects on enzyme inhibition, not a pharmacokinetic study reporting disposition parameters for cilnidipine. |
| PD | Tres_2019 | not_relevant | 3 | 2 | The paper reports in vitro enzyme inhibition (IC50) due to promiscuous aggregation, which is a physicochemical artifact and not a pharmacodynamic exposure-response relationship for the drug's therapeutic effect. |
| popPK | Uneyama_1999 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Uneyama_1999 | not_relevant | 0 | 0 | The paper focuses on the selectivity of dihydropyridines for cardiac L-type and sympathetic N-type Ca2+ channels, likely using electrophysiology or binding assays, and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for cilnidipine in a clinical or PK/PD context. |
| PGx | Xia_2012 | not_relevant | 0 | 0 | The study investigates the inhibitory effects of cilnidipine on CYP3A4 activity in human liver microsomes but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 07:38 UTC</sub>
