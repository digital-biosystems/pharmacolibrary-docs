<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;cycloserine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cycloserine_Kengo2024_reference&quot;,&quot;label&quot;:&quot;Kengo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cycloserine/Cycloserine_Kengo2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cycloserine_Mulubwa2019v2_reference&quot;,&quot;label&quot;:&quot;Mulubwa_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cycloserine/Cycloserine_Mulubwa2019v2_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cycloserine

- **generic name:** cycloserine
- **ATC codes:** `J04AB01`
- **DrugBank:** [DB00260](https://go.drugbank.com/drugs/DB00260) · **PubChem:** [CID 6234](https://pubchem.ncbi.nlm.nih.gov/compound/6234)
- **molar mass:** 102.0919 g/mol (C3H6N2O2) — DrugBank
- **groups:** approved, investigational

## About

Cycloserine is an antibiotic used to treat tuberculosis and has also been studied for Gaucher's disease. It is an approved medicine, appears on the WHO essential medicines list, and is used mainly as part of tuberculosis treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418508](https://www.wikidata.org/wiki/Q418508) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

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
| <span class="pk-badge pk-badge--green">extracted</span> | [Kengo_2024_reference](drugs/drug_cycloserine/Cycloserine_Kengo2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kengo A et al., Assessing potential drug-drug interacti…, Antimicrobial agents and ch… (2024) | [10.1128/aac.01583-23](https://doi.org/10.1128/aac.01583-23) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mulubwa_2019_2_reference](drugs/drug_cycloserine/Cycloserine_Mulubwa2019v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Mulubwa M et al., Amount of Cycloserine Emanating from Te…, Drugs in R&D (2019) | [10.1007/s40268-019-00281-4](https://doi.org/10.1007/s40268-019-00281-4) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [van_2020_reference](drugs/drug_cycloserine/Cycloserine_van2020_reference.md) | — | 1-compartment (no model) | 5 | van der Galiën R et al., Pharmacokinetic Modeling, Simulation, a…, Clinical pharmacokinetics (2020) | [10.1007/s40262-020-00860-8](https://doi.org/10.1007/s40262-020-00860-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Alghamdi_2019_reference](drugs/drug_cycloserine/Cycloserine_Alghamdi2019_reference.md) | — | 1-compartment (no model) | 5 (+1 cov.) | Alghamdi WA et al., Cycloserine Population Pharmacokinetics…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.00055-19](https://doi.org/10.1128/AAC.00055-19) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chang_2017_reference](drugs/drug_cycloserine/Cycloserine_Chang2017_reference.md) | — | 1-compartment (no model) | 0 | Chang MJ et al., Population pharmacokinetics of moxiflox…, International journal of an… (2017) | [10.1016/j.ijantimicag.2017.01.024](https://doi.org/10.1016/j.ijantimicag.2017.01.024) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chirehwa_2020_reference](drugs/drug_cycloserine/Cycloserine_Chirehwa2020_reference.md) | — | 1-compartment (no model) | 0 | Chirehwa MT et al., Population Pharmacokinetics of Cycloser…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.01381-20](https://doi.org/10.1128/AAC.01381-20) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Upton_2025_reference](drugs/drug_cycloserine/Cycloserine_Upton2025_reference.md) | — | general linear (no model) | 6 | Upton CM et al., Cerebrospinal fluid penetration of cycl…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00931-25](https://doi.org/10.1128/aac.00931-25) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [van_2023_reference](drugs/drug_cycloserine/Cycloserine_van2023_reference.md) | — | 1-compartment (no model) | 0 | van der Laan LE et al., Optimizing dosing of the cycloserine pr…, Antimicrobial agents and ch… (2023) | [10.1128/aac.00611-23](https://doi.org/10.1128/aac.00611-23) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Deshpande_2018_CFU](drugs/drug_cycloserine/pd_Deshpande_2018_CFU.md) | colony-forming units (CFU) ← d-cycloserine · inhibition effect | — | Deshpande D et al., d-Cycloserine Pharmacokinetics/Pharmaco…, Clinical infectious disease… (2018) | [10.1093/cid/ciy624](https://doi.org/10.1093/cid/ciy624) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | **SLC6A4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Karel_2018](drugs/drug_cycloserine/pgx_Karel_2018_SLC6A4_Q100.md) | Karel P et al., d-Cycloserine enhanced extinction of co…, Addiction biology (2018) | [10.1111/adb.12483](https://doi.org/10.1111/adb.12483) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cycloserine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` target | paper PGx gene |
| — | platelet | `SLC6A4` target | paper PGx gene |

<sub>Actors without a tissue in the table: DDC (inhibitor), GRIN1 (inhibitor), SLC36A2 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 101 matched, 75 returned
- **screened:** 6  ·  **relevant:** 8
- **records:** 8  ·  extracted 2  ·  needs_review 1  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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
