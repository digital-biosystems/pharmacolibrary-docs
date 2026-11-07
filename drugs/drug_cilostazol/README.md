<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;cilostazol&quot;}]"></div>

# cilostazol

- **generic name:** cilostazol
- **ATC codes:** `B01AC23`
- **DrugBank:** [DB01166](https://go.drugbank.com/drugs/DB01166) · **PubChem:** [CID 2754](https://pubchem.ncbi.nlm.nih.gov/compound/2754)
- **molar mass:** 369.4607 g/mol (C20H27N5O2) — DrugBank
- **groups:** approved, investigational

## About

Cilostazol is a platelet aggregation inhibitor used to treat intermittent claudication and cerebral infarction. It is an approved medicine, though it carries a boxed warning and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q258591](https://www.wikidata.org/wiki/Q258591) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cilostazol | parent | 369.461 | C20H27N5O2 | DrugBank | [2754](https://pubchem.ncbi.nlm.nih.gov/compound/2754) | Lee_2014 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Lee_2014_reference](drugs/drug_cilostazol/Cilostazol_Lee2014_reference.md) | — | 1-compartment (no model) | 1 | Lee D et al., Population pharmacokinetic analysis of…, Therapeutic drug monitoring (2014) | [10.1097/FTD.0000000000000077](https://doi.org/10.1097/FTD.0000000000000077) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Yoo_2010_reference](drugs/drug_cilostazol/Cilostazol_Yoo2010_reference.md) | — | 1-compartment (no model) | 0 | Yoo HD et al., Population pharmacokinetic analysis of…, British journal of clinical… (2010) | [10.1111/j.1365-2125.2009.03558.x](https://doi.org/10.1111/j.1365-2125.2009.03558.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Woo_2002_DBP](drugs/drug_cilostazol/pd_Woo_2002_DBP.md) | diastolic blood pressure ← cilostazol · direct sigmoid Emax (Hill) effect | — | Woo SK et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.122474](https://doi.org/10.1067/mcp.2002.122474) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Woo_2002_platelet_aggregation](drugs/drug_cilostazol/pd_Woo_2002_platelet_aggregation.md) | platelet aggregation ← cilostazol · direct sigmoid Emax (Hill) effect | — | Woo SK et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.122474](https://doi.org/10.1067/mcp.2002.122474) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Jung_2018_CT](drugs/drug_cilostazol/pd_Jung_2018_CT.md) | closure time ← cilostazol · indirect response — drug inhibits the loss of closure time | — | Jung YS et al., Population pharmacodynamics of cilostaz…, Translational and clinical… (2018) | [10.12793/tcp.2018.26.2.93](https://doi.org/10.12793/tcp.2018.26.2.93) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Woo_2002_HR](drugs/drug_cilostazol/pd_Woo_2002_HR.md) | heart rate ← cilostazol · direct sigmoid Emax (Hill) effect | — | Woo SK et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.122474](https://doi.org/10.1067/mcp.2002.122474) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP3A5** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Yokoyama_2021](drugs/drug_cilostazol/pgx_Yokoyama_2021_CYP3A5_Q100.md) | Yokoyama T et al., Impact of Cilostazol Pharmacokinetics o…, Biological & pharmaceutical… (2021) | [10.1248/bpb.b21-00535](https://doi.org/10.1248/bpb.b21-00535) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cilostazol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` metabolism/substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` metabolism/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: PDE3A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 12:17 | 10:28 | 0/2/0 | 2/0/0 | 0/0/1 | 152,526/14,956 | einfracz / qwen3.8-27b | 23 | 5/10 | 21/2 | 0 |

## Coverage

- **PubMed hits:** 160 matched, 106 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cui_2020.pdf` | Cui A et al., Pharmacokinetic modeling analysis of ci…, Xenobiotica; the fate of fo… (2020) | popPK | 10 | [10.1080/00498254.2019.1629042](https://doi.org/10.1080/00498254.2019.1629042) | [31181990](https://pubmed.ncbi.nlm.nih.gov/31181990) | The study describes a population PK model for cilostazol in humans, but the specific numeric parameter values (CL, V, Ka, etc.) are not present in the provided evidence text. |
| `Lee_2014.pdf` | Lee D et al., Population pharmacokinetic analysis of…, Therapeutic drug monitoring (2014) | popPK | 10 | [10.1097/FTD.0000000000000077](https://doi.org/10.1097/FTD.0000000000000077) | [24739664](https://pubmed.ncbi.nlm.nih.gov/24739664) | The study reports a population PK model for cilostazol in humans with specific numeric values for absorption rate constants and relative changes in clearance provided in the abstract. |
| `Yoo_2010.pdf` | Yoo HD et al., Population pharmacokinetic analysis of…, British journal of clinical… (2010) | popPK | 10 | [10.1111/j.1365-2125.2009.03558.x](https://doi.org/10.1111/j.1365-2125.2009.03558.x) | [20078610](https://pubmed.ncbi.nlm.nih.gov/20078610) | The study reports a population pharmacokinetic model for cilostazol with explicit numeric values for clearance, volume, intercompartmental clearance, and absorption rate in the text. |
| `Woo_2002.pdf` | Woo SK et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2002) | popPK | 9 | [10.1067/mcp.2002.122474](https://doi.org/10.1067/mcp.2002.122474) | [11956507](https://pubmed.ncbi.nlm.nih.gov/11956507) | The study reports a 2-compartment PK model for cilostazol in humans, but the specific numeric values for clearance, volume, and rate constants are not present in the provided abstract text. |
| `Yun_2014.pdf` | Yun HY et al., Semi-mechanistic modelling and simulati…, Basic & clinical pharmacolo… (2014) | popPK | 8 | [10.1111/bcpt.12222](https://doi.org/10.1111/bcpt.12222) | [24612881](https://pubmed.ncbi.nlm.nih.gov/24612881) | The paper describes a semi-mechanistic PK/PD model for cilostazol (including a two-compartment PK model), but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/evidence. |
| `Świerczek_2022.pdf` | Świerczek A et al., Pharmacokinetic/Pharmacodynamic Assessm…, The Journal of pharmacology… (2022) | popPK | 7 | [10.1124/jpet.121.001004](https://doi.org/10.1124/jpet.121.001004) | [35221290](https://pubmed.ncbi.nlm.nih.gov/35221290) | The study reports quantitative PK parameters for cilostazol in mice, but the specific numeric values are not present in the provided evidence. |

<sub>queue written 2026-10-13 12:14 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abbas_2000 | not_relevant | 0 | 0 | The paper reports in vitro enzyme isoform identification and inhibition, not a pharmacogenomic effect (gene variant) on PK/PD parameters. |
| PGx | Adil_2025 | not_relevant | 1 | 1 | The paper discusses a pharmacogenomic effect on clinical outcomes (stroke recurrence) for clopidogrel, but does not report any effect on a pharmacokinetic or pharmacodynamic parameter of cilostazol. |
| popPK | Ban_2026 | irrelevant | 0 | 0 | This study investigates post-procedural headache after aneurysm coil embolization, mentioning cilostazol only as a baseline medication and risk factor, not as the subject of pharmacokinetic analysis. |
| PGx | Bhattacharjee_2023 | not_relevant | 0 | 0 | The paper is a systems biology study on Alzheimer's disease using cilostazol as a potential repurposed drug to target amyloid-beta receptors, and does not report pharmacogenomic effects on cilostazol PK/PD parameters. |
| PGx | Bramer_1999 | not_relevant | 0 | 0 | The study investigates CYP2D6 inhibition by quinidine and concludes that CYP2D6 does not significantly contribute to cilostazol metabolism; it does not report a genotype-based effect on cilostazol PK/PD. |
| popPK | Brass_2012 | irrelevant | 0 | 0 | This is a clinical efficacy trial for K-134 where cilostazol is used only as a comparator, and no pharmacokinetic parameters are reported. |
| PGx | Castellsague_2018 | not_relevant | 0 | 0 | The study evaluates the effectiveness of regulatory risk minimization measures and prescribing practices, not the effect of gene variants on cilostazol pharmacokinetics or pharmacodynamics. |
| PGx | Chapman_2003 | not_relevant | 0 | 0 | The paper is a review of cilostazol efficacy and safety, mentioning CYP interactions but not reporting pharmacogenomic data or genotype-based PK/PD changes. |
| popPK | Cui_2020 | relevant | 10 | 0 | The study describes a population PK model for cilostazol in humans, but the specific numeric parameter values (CL, V, Ka, etc.) are not present in the provided evidence text. |
| PGx | Galli_2024 | not_relevant | 3 | 5 | The paper focuses on the comparative antiplatelet efficacy (PD) of cilostazol in CYP2C19 carriers compared to other agents, but it does not report how CYP2C19 variants specifically alter the pharmacokinetics or baseline pharmacodynamics of cilostazol itself. |
| PGx | Hernandez-Suarez_2018 | not_relevant | 2 | 5 | The study examines the effect of cilostazol on platelet reactivity (a PD parameter of clopidogrel) and genotypes are only used for baseline comparison, not to report a pharmacogenomic effect of cilostazol itself. |
| PGx | Hiratsuka_2007 | not_relevant | 2 | 0 | The paper identifies the CYP enzymes (CYP3A4, CYP3A5) responsible for cilostazol metabolism using recombinant proteins, but it does not report how specific human genotypes or variants affect PK parameters. |
| PGx | Jeong_2012 | not_relevant | 1 | 2 | The paper reports no genetic effect on cilostazol's PK/PD parameters (the antiplatelet effect of adding cilostazol was "not influenced by genetic polymorphisms"), focusing instead on the effect of CYP2C19 on clopidogrel. |
| PGx | Jeong_2012_2 | not_relevant | 1 | 0 | The study focuses on the pharmacodynamics of clopidogrel and the impact of switching to cilostazol in CYP2C19 variants, rather than a genetic effect on cilostazol's PK/PD parameters. |
| popPK | Jung_2018 | irrelevant | 2 | 0 | The study reports population pharmacodynamic (PD) parameters (Kout, Emax, EC50) rather than pharmacokinetic (PK) disposition parameters (CL, V, ka), and the PK model values are not provided in the evidence. |
| PGx | Kaikita_2018 | not_relevant | 3 | 2 | The study investigates the pharmacogenomic effect of CYP2C19 genotype on clopidogrel efficacy, and while cilostazol is used as a treatment to overcome this resistance, the paper does not report how a gene variant affects the PK or PD of cilostazol itself. |
| PGx | Kast_2024 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (CYP3A4/P-gp inhibition) for PK effects and anti-cancer mechanisms, not on pharmacogenomic effects of genetic variants on cilostazol. |
| PGx | Kaukab_2019 | not_relevant | 0 | 0 | The study reports a drug-drug interaction between cilostazol and metoclopramide in healthy volunteers, not a pharmacogenomic effect on the PK or PD of cilostazol. |
| popPK | Kihara_1995 | irrelevant | 3 | 0 | The study focuses on pharmacodynamics (nerve blood flow and conduction velocity) in rats; the only pharmacokinetic values provided are cited human data (half-life), not measured disposition parameters (CL, V, Q) for the study subjects. |
| PGx | Kim_2011 | not_relevant | 0 | 0 | The text is a short abstract or snippet that discusses the geographic usage and ethnic efficacy of cilostazol but does not report any specific gene variant, genotype, or pharmacokinetic/pharmacodynamic parameter measurements. |
| PGx | Kim_2012 | not_relevant | 0 | 0 | The paper is a general overview of antiplatelet therapies and mentions cilostazol only as an older agent being explored, without reporting any specific pharmacogenomic effects on its PK or PD. |
| PGx | Lim_2015 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (cilostazol affecting carvedilol pharmacokinetics) in rats, rather than a pharmacogenomic effect (gene variant) on cilostazol itself. |
| popPK | Liu_2000 | irrelevant | 0 | 0 | The study reports pharmacodynamic mechanisms (adenosine uptake inhibition) and infarct size data, not pharmacokinetic parameters (CL, V, ka) for cilostazol. |
| PGx | Liu_2024 | not_relevant | 0 | 0 | The paper studies clopidogrel resistance and gene polymorphisms, mentioning cilostazol only as an alternative therapy without reporting any PK/PD parameters. |
| PGx | Park_2012 | not_relevant | 1 | 0 | The paper discusses clopidogrel pharmacogenomics extensively, and mentions cilostazol as an adjunct, but does not report pharmacogenomic effects on cilostazol's PK/PD parameters. |
| PGx | Park_2014 | not_relevant | 0 | 0 | The paper does not report how a gene variant changes the pharmacokinetic or pharmacodynamic parameters of cilostazol; it only notes cilostazol is metabolized by CYP2C19 and reports PD comparisons of cilostazol vs clopidogrel in the presence of a PPI. |
| PGx | Patel_2026 | not_relevant | 1 | 2 | The paper discusses Moyamoya vasculopathy, mentions cilostazol as a general antiplatelet agent, but does not report a pharmacogenomic study linking specific genetic variants to cilostazol pharmacokinetics or pharmacodynamics. |
| PGx | Qingyu_2026 | not_relevant | 0 | 0 | The study evaluates clinical outcomes (ischemic stroke, bleeding) rather than pharmacokinetic or pharmacodynamic parameters of cilostazol. |
| PGx | Raheja_2026 | not_relevant | 2 | 0 | The paper discusses cilostazol as an alternative to clopidogrel but does not report a pharmacogenomic effect on cilostazol's own PK or PD parameters. |
| PGx | Roberts_2013 | not_relevant | 0 | 0 | The paper discusses treatment options for poor clopidogrel response, mentioning cilostazol only as a therapeutic alternative to add, but it does not report how a gene variant affects cilostazol's PK or PD parameters. |
| PGx | Suri_1999 | not_relevant | 0 | 0 | The paper investigates the effect of a CYP2C19 inhibitor (drug-drug interaction), not a genetic variant (pharmacogenomics) on cilostazol's PK parameters. |
| PGx | Tai_2017 | not_relevant | 1 | 2 | The study is a clinical trial of cilostazol's efficacy in Alzheimer's disease and examines ApoE genotype as a covariate for clinical response, but it does not measure pharmacokinetic or pharmacodynamic parameters of cilostazol (e.g., plasma concentration, platelet inhibition) nor report how the genotype changes the drug's PK/PD profile. |
| PGx | Takeuchi_2016 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (donepezil and cilostazol at ABCG2), not a pharmacogenomic effect of a gene variant on cilostazol's PK or PD. |
| popPK | Venkatasamy_2016 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of smooth muscle relaxation where cilostazol is used only as a comparator drug, with no pharmacokinetic parameters reported. |
| popPK | Wang_2006 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of diosgenin on ion channels in neuronal cells, with cilostazol only mentioned as a positive control and no pharmacokinetic parameters reported. |
| PGx | Wichaiyo_2026 | not_relevant | 0 | 0 | The text discusses cilostazol only as a class member in the context of combination therapy for stroke prevention and does not report any specific gene variant, genotype, or phenotype affecting its pharmacokinetics or pharmacodynamics. |
| popPK | Woo_2002 | relevant | 9 | 2 | The study reports a 2-compartment PK model for cilostazol in humans, but the specific numeric values for clearance, volume, and rate constants are not present in the provided abstract text. |
| popPK | Wu_2004 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study on ion channels in cell lines, containing no pharmacokinetic disposition parameters. |
| PGx | Xiang_2022 | not_relevant | 0 | 0 | The study investigates genetic biomarkers for bleeding propensity associated with ticagrelor, not the PK/PD of cilostazol. |
| PGx | Yamagata_2020 | not_relevant | 0 | 0 | The paper discusses pharmacogenomic effects on prasugrel metabolism, not cilostazol. |
| popPK | Yoon_2022 | irrelevant | 0 | 0 | The study is a clinical trial analyzing the progression of cerebral microbleeds in patients treated with cilostazol or aspirin, and it does not report any pharmacokinetic parameters for cilostazol. |
| popPK | Yoon_2023 | irrelevant | 0 | 0 | The study investigates the association between ACE gene polymorphisms and cerebral microbleed progression, using cilostazol only as a treatment arm in the underlying trial, and reports no pharmacokinetic parameters. |
| popPK | Yu_2016 | irrelevant | 0 | 0 | The paper describes a clinical trial design for cognitive outcomes in stroke patients and does not report any pharmacokinetic parameters for cilostazol. |
| popPK | Yun_2014 | relevant | 8 | 0 | The paper describes a semi-mechanistic PK/PD model for cilostazol (including a two-compartment PK model), but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/evidence. |
| PGx | Zhang_2024 | not_relevant | 0 | 0 | The paper is a cost-effectiveness analysis reporting QALYs and ICERs, not a pharmacokinetic or pharmacodynamic study reporting gene-variant effects on drug parameters. |
| PGx | Zhou_2021 | not_relevant | 0 | 0 | The study investigates drug-drug interactions in rats and does not report pharmacogenomic effects or human genetic variants. |
| popPK | Świerczek_2022 | relevant | 7 | 0 | The study reports quantitative PK parameters for cilostazol in mice, but the specific numeric values are not present in the provided evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcilostazol%5D&body=Drug%3A%20cilostazol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cilostazol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-05 12:40 UTC</sub>
