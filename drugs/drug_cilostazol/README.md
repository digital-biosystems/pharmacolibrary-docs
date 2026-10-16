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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:10 | 2:38 | 0/2/0 | 1/0/1 | 0/0/3 | 144,052/13,301 | einfracz / qwen3.8-27b | 23 | 5/10 | 21/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333), gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Lee_2014_reference](drugs/drug_cilostazol/Cilostazol_Lee2014_reference.md) | — | 1-compartment (no model) | 1 | Lee D et al., Population pharmacokinetic analysis of…, Therapeutic drug monitoring (2014) | [10.1097/FTD.0000000000000077](https://doi.org/10.1097/FTD.0000000000000077) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yoo_2010_reference](drugs/drug_cilostazol/Cilostazol_Yoo2010_reference.md) | — | 1-compartment (no model) | 0 | Yoo HD et al., Population pharmacokinetic analysis of…, British journal of clinical… (2010) | [10.1111/j.1365-2125.2009.03558.x](https://doi.org/10.1111/j.1365-2125.2009.03558.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Woo_2002_diastolic_blood_pressure](drugs/drug_cilostazol/pd_Woo_2002_diastolic_blood_pressure.md) | diastolic blood pressure ← cilostazol · direct sigmoid Emax (Hill) effect | — | Woo SK et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.122474](https://doi.org/10.1067/mcp.2002.122474) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> | [Woo_2002_platelet_aggregation](drugs/drug_cilostazol/pd_Woo_2002_platelet_aggregation.md) | platelet aggregation ← cilostazol · direct sigmoid Emax (Hill) effect | — | Woo SK et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.122474](https://doi.org/10.1067/mcp.2002.122474) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.7). Primary extraction retained.">cross-check: disputed</span> | [Jung_2018_CT](drugs/drug_cilostazol/pd_Jung_2018_CT.md) | closure time ← cilostazol · indirect response — drug inhibits the loss of closure time | — | Jung YS et al., Population pharmacodynamics of cilostaz…, Translational and clinical… (2018) | [10.12793/tcp.2018.26.2.93](https://doi.org/10.12793/tcp.2018.26.2.93) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Woo_2002_heart_rate](drugs/drug_cilostazol/pd_Woo_2002_heart_rate.md) | heart rate ← cilostazol · direct sigmoid Emax (Hill) effect | — | Woo SK et al., Pharmacokinetic and pharmacodynamic mod…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.122474](https://doi.org/10.1067/mcp.2002.122474) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Kaikita_2018](drugs/drug_cilostazol/pgx_Kaikita_2018_CYP2C19_Q100.md) | Kaikita K et al., Tailored Adjunctive Cilostazol Therapy…, Circulation journal : offic… (2018) | [10.1253/circj.CJ-18-0197](https://doi.org/10.1253/circj.CJ-18-0197) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Yokoyama_2021](drugs/drug_cilostazol/pgx_Yokoyama_2021_CYP2C19_Q100.md) | Yokoyama T et al., Impact of Cilostazol Pharmacokinetics o…, Biological & pharmaceutical… (2021) | [10.1248/bpb.b21-00535](https://doi.org/10.1248/bpb.b21-00535) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP3A5** | `Q189` · AUC/dose | metabolism | [Yokoyama_2021](drugs/drug_cilostazol/pgx_Yokoyama_2021_CYP3A5_Q189.md) | Yokoyama T et al., Impact of Cilostazol Pharmacokinetics o…, Biological & pharmaceutical… (2021) | [10.1248/bpb.b21-00535](https://doi.org/10.1248/bpb.b21-00535) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cilostazol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` formation/substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` metabolism/substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` metabolism/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: PDE3A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 160 matched, 106 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cui_2020.pdf` | Cui A et al., Pharmacokinetic modeling analysis of ci…, Xenobiotica; the fate of fo… (2020) | popPK | 10 | [10.1080/00498254.2019.1629042](https://doi.org/10.1080/00498254.2019.1629042) | [31181990](https://pubmed.ncbi.nlm.nih.gov/31181990) | The paper describes a population PK model for cilostazol but the specific numeric parameter estimates (CL, V, etc.) are not present in the provided abstract/evidence, likely residing in the full text tables or figures not included. |
| `Lee_2014.pdf` | Lee D et al., Population pharmacokinetic analysis of…, Therapeutic drug monitoring (2014) | popPK | 10 | [10.1097/FTD.0000000000000077](https://doi.org/10.1097/FTD.0000000000000077) | [24739664](https://pubmed.ncbi.nlm.nih.gov/24739664) | The study is a population PK analysis of cilostazol in humans with specific numeric values for absorption rate constants and percentage changes in clearance provided in the abstract. |
| `Yoo_2010.pdf` | Yoo HD et al., Population pharmacokinetic analysis of…, British journal of clinical… (2010) | popPK | 10 | [10.1111/j.1365-2125.2009.03558.x](https://doi.org/10.1111/j.1365-2125.2009.03558.x) | [20078610](https://pubmed.ncbi.nlm.nih.gov/20078610) | The paper is a population PK study of cilostazol in humans that explicitly reports numeric values for CL/F, V1, V2, Q, ka, and tlag in the abstract text. |
| `Yun_2014.pdf` | Yun HY et al., Semi-mechanistic modelling and simulati…, Basic & clinical pharmacolo… (2014) | popPK | 8 | [10.1111/bcpt.12222](https://doi.org/10.1111/bcpt.12222) | [24612881](https://pubmed.ncbi.nlm.nih.gov/24612881) | The paper describes a semi-mechanistic PK/PD model for cilostazol in humans, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided abstract/evidence text. |
| `Świerczek_2022.pdf` | Świerczek A et al., Pharmacokinetic/Pharmacodynamic Assessm…, The Journal of pharmacology… (2022) | popPK | 7 | [10.1124/jpet.121.001004](https://doi.org/10.1124/jpet.121.001004) | [35221290](https://pubmed.ncbi.nlm.nih.gov/35221290) | The paper is a PK/PD study in mice that includes cilostazol and likely reports parameters, but the evidence provided is only the abstract without explicit numeric values. |

<sub>queue written 2026-10-14T22:08:16.439071+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abbas_2000 | not_relevant | 0 | 0 | The study characterizes the metabolic pathways and enzyme isoforms of cilostazol but does not report any pharmacogenomic effects of genetic variants on PK or PD parameters. |
| PGx | Adil_2025 | not_relevant | 3 | 2 | The paper is a systematic review on DAPT vs monotherapy that briefly mentions CYP2B6 variants but does not report specific pharmacogenomic effects on PK or PD parameters for cilostazol. |
| popPK | Ban_2026 | irrelevant | 0 | 0 | This is a clinical study on headache outcomes after coil embolization where cilostazol is only mentioned as a co-administered medication and risk factor, not as a subject of pharmacokinetic analysis. |
| PGx | Bhattacharjee_2023 | not_relevant | 0 | 0 | The paper discusses cilostazol as a drug repurposing candidate for Alzheimer's disease targeting specific receptors, but does not report pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Bramer_1999 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (quinidine inhibiting CYP2D6) rather than a genetic variant, concluding that CYP2D6 does not significantly contribute to cilostazol metabolism. |
| popPK | Brass_2012 | irrelevant | 0 | 0 | This is a clinical efficacy trial for K-134 using cilostazol as a comparator, and it does not report any pharmacokinetic parameters for cilostazol. |
| PGx | Castellsague_2018 | not_relevant | 0 | 0 | The study is a pharmacoepidemiological analysis of risk minimization measures and does not report on the impact of specific gene variants on cilostazol's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Chapman_2003 | not_relevant | 2 | 1 | The paper is a general clinical review of cilostazol that discusses drug-drug interactions with CYP inhibitors, but it does not report specific pharmacogenomic data showing that specific genetic variants alter cilostazol PK or PD parameters. |
| popPK | Cui_2020 | relevant | 10 | 2 | The paper describes a population PK model for cilostazol but the specific numeric parameter estimates (CL, V, etc.) are not present in the provided abstract/evidence, likely residing in the full text tables or figures not included. |
| PGx | Galli_2024 | not_relevant | 1 | 2 | The study compares antiplatelet drugs in CYP2C19 carriers but does not report pharmacogenomic effects on the PK or PD of cilostazol itself; it only reports cilostazol's effect on platelet reactivity compared to other drugs. |
| PGx | Hernandez-Suarez_2018 | not_relevant | 2 | 2 | The study reports a pharmacodynamic interaction between cilostazol and clopidogrel (platelet reactivity) but does not report a pharmacogenomic effect (gene variant influencing a PK/PD parameter) for cilostazol. |
| PGx | Hiratsuka_2007 | not_relevant | 0 | 0 | The study characterizes CYP450 enzymes involved in cilostazol metabolism using recombinant proteins in vitro but does not investigate gene variants, genotypes, or phenotypes in humans to report a pharmacogenomic effect on PK/PD parameters. |
| PGx | Hwang_2010 | not_relevant | 4 | 8 | The paper reports the effect of CYP2C19 genotype on the efficacy of cilostazol as an adjunct to clopidogrel, but does not report pharmacokinetic or pharmacodynamic parameters of cilostazol itself (e.g., cilostazol concentration or direct effect on PD measures independent of the combination). |
| PGx | Jeong_2012 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effect of cilostazol (platelet aggregation), but the reported genetic polymorphisms (CYP2C19, ABCB1, CYP3A5) are associated with the efficacy of clopidogrel, not cilostazol. |
| PGx | Jeong_2012_2 | not_relevant | 5 | 5 | The study primarily investigates the switching from clopidogrel to cilostazol and CYP2C19's effect on clopidogrel; while cilostazol is involved, the focus is on drug switching rather than a specific pharmacogenomic effect on cilostazol's PK/PD parameters. |
| popPK | Jung_2018 | irrelevant | 2 | 0 | The study reports population pharmacodynamic (PD) parameters for closure time, not pharmacokinetic disposition parameters (CL, V, ka) for cilostazol. |
| PGx | Kast_2024 | not_relevant | 0 | 0 | The paper discusses the mechanism of cilostazol in combination therapy for cancer but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| PGx | Kaukab_2019 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction between metoclopramide and cilostazol, not a pharmacogenomic effect on cilostazol. |
| popPK | Kihara_1995 | irrelevant | 2 | 3 | Study focuses on neurovascular effects in rats; human PK parameters (t1/2) are cited from a reference, not original data. |
| PGx | Kim_2011 | not_relevant | 1 | 1 | The text is an abstract discussing clinical utility and ethnic usage patterns of cilostazol without reporting any pharmacogenomic data or specific PK/PD parameter changes linked to genotypes. |
| PGx | Kim_2012 | not_relevant | 0 | 0 | The text is a general overview of antiplatelet therapies and mentions cilostazol only in a list of agents, providing no specific pharmacogenomic data or PK/PD analysis for the drug. |
| PGx | Lim_2015 | not_relevant | 0 | 0 | The study investigates drug-drug interactions in rats, not the effect of gene variants on cilostazol pharmacokinetics. |
| popPK | Liu_2000 | irrelevant | 0 | 0 | The study is mechanistic/in-vitro and in-vivo functional (adenosine uptake, infarct size), reporting no pharmacokinetic disposition parameters (CL, V, ka, etc.) for cilostazol. |
| PGx | Liu_2024 | not_relevant | 1 | 2 | The paper evaluates clopidogrel resistance and therapeutic switching to cilostazol, but does not quantify the pharmacokinetic or pharmacodynamic effect of gene variants on cilostazol specifically. |
| PGx | Park_2012 | not_relevant | 1 | 0 | The paper reviews variability in clopidogrel response and mentions adding cilostazol as a clinical strategy, but does not report pharmacogenomic effects on cilostazol PK/PD parameters. |
| PGx | Park_2014 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect for clopidogrel (CYP2C19), but the primary aim is to compare cilostazol vs. clopidogrel in stented patients, and the genetic data are not linked to cilostazol pharmacodynamics. |
| PGx | Patel_2026 | not_relevant | 0 | 0 | The paper is a general review of Moyamoya vasculopathy and mentions cilostazol's efficacy, but it does not report pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| PGx | Qingyu_2026 | not_relevant | 0 | 0 | The paper reports clinical outcomes (ischemic stroke rate) rather than pharmacokinetic or pharmacodynamic parameters of cilostazol. |
| PGx | Raheja_2026 | not_relevant | 0 | 0 | The text discusses cilostazol as a clinical alternative to clopidogrel for CYP2C19 loss-of-function carriers but does not report a pharmacogenomic effect on cilostazol's own PK or PD parameters. |
| PGx | Roberts_2013 | not_relevant | 0 | 0 | The paper discusses cilostazol only as a treatment option for poor clopidogrel responders and does not report pharmacogenomic effects on cilostazol's PK/PD parameters. |
| PGx | Suri_1999 | not_relevant | 2 | 5 | The study reports a pharmacokinetic drug-drug interaction with omeprazole, not a pharmacogenomic effect of a gene variant/genotype/phenotype on cilostazol. |
| PGx | Tai_2017 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy of cilostazol in Alzheimer's disease and analyzes associations with ApoE genotype for therapeutic outcomes, but it does not report pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, enzyme activity) driven by specific genetic variants. |
| PGx | Takeuchi_2016 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (cilostazol inhibiting BCRP), not a pharmacogenomic effect (gene variant/genotype) on cilostazol's PK/PD. |
| popPK | Venkatasamy_2016 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle relaxation where cilostazol is used only as a comparator agent, not for pharmacokinetic characterization. |
| popPK | Wang_2006 | irrelevant | 0 | 0 | The paper is an electrophysiology study of diosgenin on neuronal channels; cilostazol is mentioned only as a positive control and no pharmacokinetic data are reported. |
| PGx | Wichaiyo_2026 | not_relevant | 1 | 2 | The paper is a general review of antiplatelet drugs and discusses pharmacogenomics for clopidogrel, but provides no specific pharmacogenomic data or PK/PD parameters for cilostazol. |
| popPK | Woo_2002 | irrelevant | 1 | 0 | The paper reports a 2-compartment model and PK/PD results for cilostazol in humans, but the abstract provides only Cmax and Tmax values without the specific numeric parameters (CL, V, t1/2) required for extraction. |
| popPK | Wu_2004 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology investigation of ion channels in cell lines, not a pharmacokinetic study. |
| PGx | Xiang_2022 | not_relevant | 0 | 0 | The study focuses on bleeding events associated with ticagrelor and does not report pharmacokinetic or pharmacodynamic parameters for cilostazol. |
| PGx | Yamagata_2020 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on prasugrel (CYP2B6), not cilostazol. |
| popPK | Yoon_2022 | irrelevant | 0 | 0 | The paper is a clinical imaging study on cerebral microbleeds where cilostazol is used as a comparative treatment agent, not a pharmacokinetic study. |
| popPK | Yoon_2023 | irrelevant | 0 | 0 | This is a pharmacogenetic study on ACE I/D polymorphism and cerebral microbleeds where cilostazol is only an intervention in the parent trial, not a subject of PK analysis. |
| popPK | Yu_2016 | irrelevant | 0 | 0 | The paper is a protocol for a clinical trial assessing cognitive outcomes in stroke patients using cilostazol, with no pharmacokinetic parameters or disposition data reported. |
| popPK | Yun_2014 | relevant | 8 | 0 | The paper describes a semi-mechanistic PK/PD model for cilostazol in humans, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided abstract/evidence text. |
| PGx | Zhang_2024 | not_relevant | 1 | 0 | The paper is a cost-effectiveness analysis reporting ICERs and QALYs, not a study measuring how CYP2C19 variants directly alter the PK or PD parameters of cilostazol. |
| PGx | Zhou_2021 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction study in rats, not a pharmacogenomic effect. |
| popPK | Świerczek_2022 | relevant | 7 | 2 | The paper is a PK/PD study in mice that includes cilostazol and likely reports parameters, but the evidence provided is only the abstract without explicit numeric values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 22:08 UTC</sub>
