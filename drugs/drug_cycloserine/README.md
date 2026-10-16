<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;cycloserine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cycloserine_Kengo2024_reference&quot;,&quot;label&quot;:&quot;Kengo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cycloserine/Cycloserine_Kengo2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cycloserine_Mulubwa2019v2_reference&quot;,&quot;label&quot;:&quot;Mulubwa_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cycloserine/Cycloserine_Mulubwa2019v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cycloserine

- **generic name:** cycloserine
- **ATC codes:** `J04AB01`
- **DrugBank:** [DB00260](https://go.drugbank.com/drugs/DB00260) · **PubChem:** [CID 6234](https://pubchem.ncbi.nlm.nih.gov/compound/6234)
- **molar mass:** 102.0919 g/mol (C3H6N2O2) — DrugBank
- **groups:** approved, investigational

## About

Cycloserine is an antibiotic used to treat tuberculosis and has also been studied for Gaucher's disease. It is an approved medicine, appears on the WHO essential medicines list, and is used mainly as part of tuberculosis treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418508](https://www.wikidata.org/wiki/Q418508) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cycloserine | parent | 102.092 | C3H6N2O2 | DrugBank | [6234](https://pubchem.ncbi.nlm.nih.gov/compound/6234) | Alghamdi_2019, Upton_2025, van_2020 |
| terizidone | metabolite | 302.29 | C14H14N4O4 | PubChem | [65720](https://pubchem.ncbi.nlm.nih.gov/compound/65720) | Upton_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:41 | 17:30 | 2/5/1 | 1/0/0 | 0/0/1 | 328,057/54,584 | einfracz / qwen3.8-27b | 16 | 2/10 | 15/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.625). Primary extraction retained.">cross-check: partial</span> | [Kengo_2024_reference](drugs/drug_cycloserine/Cycloserine_Kengo2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kengo A et al., Assessing potential drug-drug interacti…, Antimicrobial agents and ch… (2024) | [10.1128/aac.01583-23](https://doi.org/10.1128/aac.01583-23) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.375). Primary extraction retained.">cross-check: partial</span> | [Mulubwa_2019_2_reference](drugs/drug_cycloserine/Cycloserine_Mulubwa2019v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Mulubwa M et al., Amount of Cycloserine Emanating from Te…, Drugs in R&D (2019) | [10.1007/s40268-019-00281-4](https://doi.org/10.1007/s40268-019-00281-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.118). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [van_2020_reference](drugs/drug_cycloserine/Cycloserine_van2020_reference.md) | — | 1-compartment (no model) | 5 | van der Galiën R et al., Pharmacokinetic Modeling, Simulation, a…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00860-8](https://doi.org/10.1007/s40262-020-00860-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Alghamdi_2019_reference](drugs/drug_cycloserine/Cycloserine_Alghamdi2019_reference.md) | — | 1-compartment (no model) | 5 (+1 cov.) | Alghamdi WA et al., Cycloserine Population Pharmacokinetics…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.00055-19](https://doi.org/10.1128/AAC.00055-19) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.429). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chang_2017_reference](drugs/drug_cycloserine/Cycloserine_Chang2017_reference.md) | — | 1-compartment (no model) | 0 | Chang MJ et al., Population pharmacokinetics of moxiflox…, International journal of an… (2017) | [10.1016/j.ijantimicag.2017.01.024](https://doi.org/10.1016/j.ijantimicag.2017.01.024) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chirehwa_2020_reference](drugs/drug_cycloserine/Cycloserine_Chirehwa2020_reference.md) | — | 1-compartment (no model) | 0 | Chirehwa MT et al., Population Pharmacokinetics of Cycloser…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.01381-20](https://doi.org/10.1128/AAC.01381-20) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Upton_2025_reference](drugs/drug_cycloserine/Cycloserine_Upton2025_reference.md) | — | general linear (no model) | 6 | Upton CM et al., Cerebrospinal fluid penetration of cycl…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00931-25](https://doi.org/10.1128/aac.00931-25) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.25). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [van_2023_reference](drugs/drug_cycloserine/Cycloserine_van2023_reference.md) | — | 1-compartment (no model) | 0 | van der Laan LE et al., Optimizing dosing of the cycloserine pr…, Antimicrobial agents and ch… (2023) | [10.1128/aac.00611-23](https://doi.org/10.1128/aac.00611-23) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.85).">in vitro</span> | [Deshpande_2018_CFU](drugs/drug_cycloserine/pd_Deshpande_2018_CFU.md) | colony-forming units (CFU) ← d-cycloserine · inhibition effect | — | Deshpande D et al., d-Cycloserine Pharmacokinetics/Pharmaco…, Clinical infectious disease… (2018) | [10.1093/cid/ciy624](https://doi.org/10.1093/cid/ciy624) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">rat</span> | **SLC6A4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Karel_2018](drugs/drug_cycloserine/pgx_Karel_2018_SLC6A4_Q100.md) | Karel P et al., d-Cycloserine enhanced extinction of co…, Addiction biology (2018) | [10.1111/adb.12483](https://doi.org/10.1111/adb.12483) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cycloserine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | brain | `SLC6A4` target | PGx paper |
| — | platelet | `SLC6A4` target | PGx paper |

<sub>Actors without a tissue in the table: DDC (inhibitor), GRIN1 (inhibitor), SLC36A2 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 101 matched, 75 returned
- **screened:** 6  ·  **relevant:** 8
- **records:** 8  ·  extracted 2  ·  needs_review 1  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_9 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chang_2017.pdf` | Chang MJ et al., Population pharmacokinetics of moxiflox…, International journal of an… (2017) | popPK | 10 | [10.1016/j.ijantimicag.2017.01.024](https://doi.org/10.1016/j.ijantimicag.2017.01.024) | [28408267](https://pubmed.ncbi.nlm.nih.gov/28408267) | The paper reports specific quantitative population PK parameters (ka, CL, V) for cycloserine in the abstract. |
| `Chirehwa_2020.pdf` | Chirehwa MT et al., Population Pharmacokinetics of Cycloser…, Antimicrobial agents and ch… (2020) | popPK | 10 | [10.1128/AAC.01381-20](https://doi.org/10.1128/AAC.01381-20) | [32816738](https://pubmed.ncbi.nlm.nih.gov/32816738) | The paper describes a population PK model for cycloserine and reports specific clearance values in the abstract (nonrenal 0.35 L/h, renal 0.43 L/h), though full population estimates and Vd are likely in the main text/tables not fully provided here. |
| `Zhu_2001.pdf` | Zhu M et al., Pharmacokinetics of cycloserine under f…, Pharmacotherapy (2001) | popPK | 10 | [10.1592/phco.21.11.891.34524](https://doi.org/10.1592/phco.21.11.891.34524) | [11718495](https://pubmed.ncbi.nlm.nih.gov/11718495) | The study reports cycloserine pharmacokinetics, but specific quantitative parameter values are not provided in the evidence snippet, only qualitative findings and Cmax trends. |
| `Zhu_2023.pdf` | Zhu Y et al., Population Pharmacokinetics and Dose Ev…, Antimicrobial agents and ch… (2023) | popPK | 10 | [10.1128/aac.01700-22](https://doi.org/10.1128/aac.01700-22) | [37097151](https://pubmed.ncbi.nlm.nih.gov/37097151) | The paper is a population pharmacokinetic study of cycloserine in humans, but the specific numeric parameter values are not present in the provided abstract text. |
| `van_2020.pdf` | van der Galiën R et al., Pharmacokinetic Modeling, Simulation, a…, Clinical pharmacokinetics (2020) | popPK | 10 | [10.1007/s40262-020-00860-8](https://doi.org/10.1007/s40262-020-00860-8) | [31981103](https://pubmed.ncbi.nlm.nih.gov/31981103) | The paper presents a population pharmacokinetic model for cycloserine in humans with all key numeric parameters (Ka, Vd, CL) explicitly stated in the text. |
| `van_2023.pdf` | van der Laan LE et al., Optimizing dosing of the cycloserine pr…, Antimicrobial agents and ch… (2023) | popPK | 10 | [10.1128/aac.00611-23](https://doi.org/10.1128/aac.00611-23) | [37971239](https://pubmed.ncbi.nlm.nih.gov/37971239) | The paper reports a population PK model for cycloserine in children, with specific numeric values for clearance and absorption parameters provided in the abstract text. |
| `Cao_2025.pdf` | Cao J et al., Population pharmacokinetics and dose ev…, The international journal o… (2025) | popPK | 9 | [10.5588/ijtld.24.0481](https://doi.org/10.5588/ijtld.24.0481) | [40155790](https://pubmed.ncbi.nlm.nih.gov/40155790) | The paper reports population PK for cycloserine, but the specific numeric parameter values are not present in the provided text (likely in tables/supplementary material). |
| `Mulubwa_2019.pdf` | Mulubwa M et al., Steady-state population pharmacokinetic…, British journal of clinical… (2019) | popPK | 9 | [10.1111/bcp.13975](https://doi.org/10.1111/bcp.13975) | [31046167](https://pubmed.ncbi.nlm.nih.gov/31046167) | The study provides a quantitative population pharmacokinetic model for cycloserine (reported as a metabolite of terizidone) with specific numeric values for clearance and absorption parameters in the abstract. |
| `Mukherjee_2025.pdf` | Mukherjee A et al., Pharmacokinetic-Pharmacodynamic (PK-PD)…, Indian journal of pediatrics (2025) | popPK | 5 | [10.1007/s12098-024-05135-9](https://doi.org/10.1007/s12098-024-05135-9) | [38802673](https://pubmed.ncbi.nlm.nih.gov/38802673) | The study is a pediatric PK analysis that includes cycloserine (n=15) and performs non-compartmental analysis, but no specific numerical PK parameters (CL, V, AUC values) for cycloserine are provided in the evidence, only general statements about reaching Cmax targets. |

<sub>queue written 2026-10-07T12:30:51.624923+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ascic_2024 | irrelevant | 0 | 0 | The paper describes the discovery of a new drug candidate (Lu AF90103) using d-cycloserine as a lead/comparator, but does not report quantitative PK disposition parameters for d-cycloserine itself. |
| popPK | Bakker_1991 | irrelevant | 0 | 0 | The study is an in-vitro binding assay of the NMDA receptor and does not report pharmacokinetic disposition parameters for cycloserine. |
| popPK | Cao_2025 | relevant | 9 | 2 | The paper reports population PK for cycloserine, but the specific numeric parameter values are not present in the provided text (likely in tables/supplementary material). |
| popPK | Charles_2001 | irrelevant | 0 | 0 | The study investigates the mechanism of Taxol-induced apoptosis in breast cancer cells and uses L-cycloserine only as a mechanism probe (inhibitor), not as a subject of pharmacokinetic analysis. |
| PGx | Gomes_2025 | not_relevant | 0 | 0 | The paper characterizes M. tuberculosis genotypes and drug resistance MICs, not human pharmacogenomics (host gene variants affecting drug PK/PD). |
| popPK | Jessen_2017 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology paper characterizing a new NMDA receptor agonist (AICP) using d-cycloserine only as a comparative reference, with no pharmacokinetic parameters reported. |
| PGx | Karel_2018 | not_relevant | 5 | 10 | The study demonstrates a genotype-dependent change in drug response (dose-efficacy relationship/PD), but it is a qualitative observation regarding efficacy thresholds (CPP extinction) and does not report a fitted quantitative effect size (theta) for a standard PK or PD parameter. |
| popPK | Kengo_2024 | irrelevant | 2 | 0 | The study uses a previously published model for cycloserine (terizidone) with parameters fixed, and does not report new quantitative PK parameter estimates (clearance, volume, etc.) for cycloserine in the provided text, only non-significant changes in clearance relative to the fixed model. |
| PGx | Lee_2022 | not_relevant | 0 | 0 | The paper reports the use of L-cycloserine as a mechanistic inhibitor of ceramide synthesis to modulate ABCB1-mediated drug resistance, but does not investigate how genetic variants affect the pharmacokinetic or pharmacodynamic parameters of L-cycloserine itself. |
| popPK | Mukherjee_2025 | relevant | 5 | 0 | The study is a pediatric PK analysis that includes cycloserine (n=15) and performs non-compartmental analysis, but no specific numerical PK parameters (CL, V, AUC values) for cycloserine are provided in the evidence, only general statements about reaching Cmax targets. |
| PGx | Mukherjee_2025 | not_relevant | 0 | 0 | The paper describes a PK-PD analysis of cycloserine in children but explicitly states that future investigations are needed for pharmacogenomic aspects, indicating no genetic variant effects were reported. |
| popPK | Nix_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of clofazimine, while cycloserine is only listed as a co-administered drug in the regimen. |
| popPK | Peloquin_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of para-aminosalicylic acid (PAS), and cycloserine was only used as a co-administered drug, with no PK parameters for cycloserine reported. |
| popPK | Pittaluga_1997 | irrelevant | 0 | 0 | The paper describes an in vitro biochemical assay (kynurenate test) for cognitive enhancers, not a pharmacokinetic study of D-cycloserine. |
| popPK | Pittaluga_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay (kynurenate test) measuring receptor activity in brain slices, not a pharmacokinetic study reporting disposition parameters for cycloserine. |
| PGx | Roy_2025 | not_relevant | 0 | 0 | The paper reports a bacterial resistance mutation in Staphylococcus aureus, not a human pharmacogenomic effect on cycloserine PK or PD. |
| PGx | Skokou_2023 | not_relevant | 1 | 2 | The paper is a narrative review on cognitive rehabilitation in schizophrenia and mentions cycloserine's procognitive effect and a COMT polymorphism association with general outcome, but does not report a pharmacogenomic effect on the PK or PD of cycloserine. |
| popPK | Srivastava_2021 | irrelevant | 0 | 0 | The study is an in-vitro/in-silico hollow fiber model focusing on vancomycin PK, with d-cycloserine serving only as a co-administered agent to test synergy without reporting its PK parameters. |
| popPK | Storch_2007 | irrelevant | 0 | 0 | This is a clinical efficacy trial for obsessive-compulsive disorder, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Storch_2016 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for cognitive behavior therapy augmentation in pediatric OCD and does not report pharmacokinetic parameters. |
| popPK | Urbano_2014 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for autism spectrum disorder that does not report any pharmacokinetic parameters (CL, V, ka, etc.) for cycloserine. |
| popPK | Zhu_2001 | relevant | 10 | 1 | The study reports cycloserine pharmacokinetics, but specific quantitative parameter values are not provided in the evidence snippet, only qualitative findings and Cmax trends. |
| popPK | Zhu_2023 | relevant | 10 | 0 | The paper is a population pharmacokinetic study of cycloserine in humans, but the specific numeric parameter values are not present in the provided abstract text. |
| PGx | van_2014 | not_relevant | 0 | 0 | The paper reviews bedaquiline pharmacokinetics and drug-drug interactions (including with cycloserine), but does not report pharmacogenomic effects (gene variants) on any PK/PD parameter. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:33 UTC</sub>
