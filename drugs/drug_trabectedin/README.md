<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;trabectedin&quot;}]"></div>

# trabectedin

- **generic name:** trabectedin
- **ATC codes:** `L01CX01`
- **DrugBank:** [DB05109](https://go.drugbank.com/drugs/DB05109) · **PubChem:** [CID 108150](https://pubchem.ncbi.nlm.nih.gov/compound/108150)
- **molar mass:** 761.837 g/mol (C39H43N3O11S) — DrugBank
- **groups:** approved, investigational

## About

Trabectedin is an alkylating anticancer medicine used to treat sarcoma and ovarian cancer. It is authorised in the European Union and is used in cancer treatment, though one related marketing application was refused.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2637746](https://www.wikidata.org/wiki/Q2637746) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| trabectedin | parent | 761.837 | C39H43N3O11S | DrugBank | [108150](https://pubchem.ncbi.nlm.nih.gov/compound/108150) | Perez-Ruixo_2007, Poggesi_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:11 | 11:19 | 0/0/2 | 5/0/0 | 0/0/7 | 149,154/46,763 | openai / gpt-6-luna | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Perez-Ruixo_2007_cancer patients](drugs/drug_trabectedin/Trabectedin_PerezRuixo2007_reference.md) | — | 1-compartment (no model) | 2 | Perez-Ruixo JJ et al., Population pharmacokinetic meta-analysi…, Clinical pharmacokinetics (2007) | [10.2165/00003088-200746100-00005](https://doi.org/10.2165/00003088-200746100-00005) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Poggesi_2019_children and adolescent patients with cancer](drugs/drug_trabectedin/Trabectedin_Poggesi2019_reference.md) | — | 1-compartment (no model) | 3 | Poggesi I et al., Population pharmacokinetics of trabecte…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-019-03899-y](https://doi.org/10.1007/s00280-019-03899-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Fetterly_2008_ALT](drugs/drug_trabectedin/pd_Fetterly_2008_ALT.md) | alanine aminotransferase ← trabectedin · indirect response — drug stimulates the production of alanine aminotransferase | — | Fetterly GJ et al., Semimechanistic pharmacokinetic/pharmac…, Cancer chemotherapy and pha… (2008) | [10.1007/s00280-007-0583-8](https://doi.org/10.1007/s00280-007-0583-8) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hing_2008_ANC](drugs/drug_trabectedin/pd_Hing_2008_ANC.md) | absolute neutrophil counts biomarker turnover ← trabectedin | — | Hing J et al., Mechanism-based pharmacokinetic/pharmac…, Clinical pharmacology and t… (2008) | [10.1038/sj.clpt.6100259](https://doi.org/10.1038/sj.clpt.6100259) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_G0_G1](drugs/drug_trabectedin/pd_Miao_2016_G0_G1.md) | Cell number in G0/G1 phase ← trabectedin · inhibition effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_G0_G1_2](drugs/drug_trabectedin/pd_Miao_2016_G0_G1_2.md) | Cell number in G0/G1 phase ← trabectedin · inhibition effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_G2_M](drugs/drug_trabectedin/pd_Miao_2016_G2_M.md) | Cell number in G2/M phase ← trabectedin · inhibition effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_G2_M_2](drugs/drug_trabectedin/pd_Miao_2016_G2_M_2.md) | Cell number in G2/M phase ← trabectedin · inhibition effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_Rtot](drugs/drug_trabectedin/pd_Miao_2016_Rtot.md) | Total cell number ← trabectedin · inhibition effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_Rtot_2](drugs/drug_trabectedin/pd_Miao_2016_Rtot_2.md) | Total cell number ← trabectedin · inhibition effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_S](drugs/drug_trabectedin/pd_Miao_2016_S.md) | Cell number in S phase ← trabectedin · inhibition effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_S_2](drugs/drug_trabectedin/pd_Miao_2016_S_2.md) | Cell number in S phase ← trabectedin · inhibition effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_sub_G1](drugs/drug_trabectedin/pd_Miao_2016_sub_G1.md) | Cell number in sub G1 phase ← trabectedin · stimulation effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_sub_G1_2](drugs/drug_trabectedin/pd_Miao_2016_sub_G1_2.md) | Cell number in sub G1 phase ← trabectedin · stimulation effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_2_viable_cell_numbers_BxPC_3](drugs/drug_trabectedin/pd_Miao_2016_2_viable_cell_numbers_BxPC_3.md) | viable cell numbers (BxPC-3) ← trabectedin · delayed effect through transit (transduction) compartments | — | Miao X et al., Pharmacodynamic modeling of combined ch…, Cancer chemotherapy and pha… (2016) | [10.1007/s00280-015-2907-4](https://doi.org/10.1007/s00280-015-2907-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_2_viable_cell_numbers_MiaPaCa_2](drugs/drug_trabectedin/pd_Miao_2016_2_viable_cell_numbers_MiaPaCa_2.md) | viable cell numbers (MiaPaCa-2) ← trabectedin · delayed effect through transit (transduction) compartments | — | Miao X et al., Pharmacodynamic modeling of combined ch…, Cancer chemotherapy and pha… (2016) | [10.1007/s00280-015-2907-4](https://doi.org/10.1007/s00280-015-2907-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Miao_2024_pancreatic_cancer_cell_responses_at_the_proteome_level](drugs/drug_trabectedin/pd_Miao_2024_pancreatic_cancer_cell_responses_at_the_proteome_l.md) | pancreatic cancer cell responses at the proteome level ← trabectedin · model not identified | — | Miao X et al., Systems Pharmacodynamic Model of Combin…, Journal of pharmaceutical s… (2024) | [10.1016/j.xphs.2023.10.036](https://doi.org/10.1016/j.xphs.2023.10.036) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **BRCA1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Laroche-Clary_2015](drugs/drug_trabectedin/pgx_Laroche_Clary_2015_BRCA1_Q100.md) | Laroche-Clary A et al., BRCA1 haplotype and clinical benefit of…, British journal of cancer (2015) | [10.1038/bjc.2014.624](https://doi.org/10.1038/bjc.2014.624) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Maillard_2020](drugs/drug_trabectedin/pgx_Maillard_2020_ABCB1_Q100.md) | Maillard M et al., Pharmacogenetic Study of Trabectedin-In…, Cancers (2020) | [10.3390/cancers12123647](https://doi.org/10.3390/cancers12123647) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCC2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Maillard_2020](drugs/drug_trabectedin/pgx_Maillard_2020_ABCC2_Q100.md) | Maillard M et al., Pharmacogenetic Study of Trabectedin-In…, Cancers (2020) | [10.3390/cancers12123647](https://doi.org/10.3390/cancers12123647) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCC3** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Maillard_2020](drugs/drug_trabectedin/pgx_Maillard_2020_ABCC3_Q100.md) | Maillard M et al., Pharmacogenetic Study of Trabectedin-In…, Cancers (2020) | [10.3390/cancers12123647](https://doi.org/10.3390/cancers12123647) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCC4** | `Q328` · kout | transport | [Maillard_2020](drugs/drug_trabectedin/pgx_Maillard_2020_ABCC4_Q328.md) | Maillard M et al., Pharmacogenetic Study of Trabectedin-In…, Cancers (2020) | [10.3390/cancers12123647](https://doi.org/10.3390/cancers12123647) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCG2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Maillard_2020](drugs/drug_trabectedin/pgx_Maillard_2020_ABCG2_Q100.md) | Maillard M et al., Pharmacogenetic Study of Trabectedin-In…, Cancers (2020) | [10.3390/cancers12123647](https://doi.org/10.3390/cancers12123647) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP3A5** | `Q305` · kfm | formation | [Maillard_2020](drugs/drug_trabectedin/pgx_Maillard_2020_CYP3A5_Q305.md) | Maillard M et al., Pharmacogenetic Study of Trabectedin-In…, Cancers (2020) | [10.3390/cancers12123647](https://doi.org/10.3390/cancers12123647) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trabectedin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport, `ABCG2` transport | paper PGx gene |
| absorption | kidney | `ABCB1` transport | paper PGx gene |
| absorption | liver | `ABCB1` transport, `ABCG2` transport | paper PGx gene |
| absorption | mammary gland | `ABCG2` transport | paper PGx gene |
| absorption | placenta | `ABCB1` transport | paper PGx gene |
| absorption | small intestine | `ABCB1` transport, `ABCG2` transport | paper PGx gene |
| absorption | testis | `ABCB1` transport, `ABCG2` transport | paper PGx gene |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` formation | paper PGx gene |
| metabolism | liver | `CYP2C19` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP2E1` substrate, `CYP3A4` substrate, `CYP3A5` formation | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` formation | DrugBank actor |
| excretion | kidney | `ABCC2` transport, `ABCC4` transport | paper PGx gene |
| excretion | liver | `ABCC2` transport, `ABCC3` transport, `ABCC4` transport | paper PGx gene |
| excretion | small intestine | `ABCC2` transport, `ABCC3` transport | paper PGx gene |

<sub>Actors without a tissue in the table: BRCA1 (target), DNA (binder), PTGS1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 44 matched, 44 returned
- **screened:** 9  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Perez-Ruixo_2007.pdf` | Perez-Ruixo JJ et al., Population pharmacokinetic meta-analysi…, Clinical pharmacokinetics (2007) | popPK | 10 | [10.2165/00003088-200746100-00005](https://doi.org/10.2165/00003088-200746100-00005) | [17854236](https://pubmed.ncbi.nlm.nih.gov/17854236) | The human population-PK model reports numeric clearance, volume, and half-life values. |
| `Poggesi_2019.pdf` | Poggesi I et al., Population pharmacokinetics of trabecte…, Cancer chemotherapy and pha… (2019) | popPK | 10 | [10.1007/s00280-019-03899-y](https://doi.org/10.1007/s00280-019-03899-y) | [31286189](https://pubmed.ncbi.nlm.nih.gov/31286189) | Pediatric trabectedin population-PK results include numeric clearance and central volume values. |
| `Sessa_2013.pdf` | Sessa C et al., Phase I clinical and pharmacokinetic st…, Investigational new drugs (2013) | popPK | 9 | [10.1007/s10637-013-9942-y](https://doi.org/10.1007/s10637-013-9942-y) | [23467812](https://pubmed.ncbi.nlm.nih.gov/23467812) | This is a human trabectedin pharmacokinetic study, but no numeric disposition parameter values appear in the provided evidence. |
| `Fetterly_2008.pdf` | Fetterly GJ et al., Semimechanistic pharmacokinetic/pharmac…, Cancer chemotherapy and pha… (2008) | popPK | 8 | [10.1007/s00280-007-0583-8](https://doi.org/10.1007/s00280-007-0583-8) | [17922277](https://pubmed.ncbi.nlm.nih.gov/17922277) | The population PKPD model concerns trabectedin, but the reported numeric values are pharmacodynamic and no trabectedin disposition parameters are shown. |
| `Hing_2008.pdf` | Hing J et al., Mechanism-based pharmacokinetic/pharmac…, Clinical pharmacology and t… (2008) | popPK | 8 | [10.1038/sj.clpt.6100259](https://doi.org/10.1038/sj.clpt.6100259) | [17597713](https://pubmed.ncbi.nlm.nih.gov/17597713) | Human trabectedin PK/PD model reports a numeric effect-compartment rate constant, though no CL or V values are shown. |
| `Beumer_2007.pdf` | Beumer JH et al., Metabolism of trabectedin (ET-743, Yond…, Cancer chemotherapy and pha… (2007) | pgx | 8 | [10.1007/s00280-006-0342-2](https://doi.org/10.1007/s00280-006-0342-2) | [16988825](https://www.ncbi.nlm.nih.gov/pubmed/16988825) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Leporini_2014.pdf` | Leporini C et al., A comprehensive safety evaluation of tr…, BioDrugs : clinical immunot… (2014) | pgx | 7 | [10.1007/s40259-014-0100-7](https://doi.org/10.1007/s40259-014-0100-7) | [25209722](https://www.ncbi.nlm.nih.gov/pubmed/25209722) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Machiels_2014.pdf` | Machiels JP et al., Impact of cytochrome P450 3A4 inducer a…, Cancer chemotherapy and pha… (2014) | pgx | 7 | [10.1007/s00280-014-2554-1](https://doi.org/10.1007/s00280-014-2554-1) | [25100135](https://www.ncbi.nlm.nih.gov/pubmed/25100135) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T14:01:35.203935+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Beumer_2007 | not_relevant | 0 | 0 | Genotypes were assessed, but no correlation with metabolite profiles was found and no genotype effect on a trabectedin PK or PD parameter was reported. |
| PGx | Brandon_2006 | not_relevant | 0 | 0 | The study characterizes in vitro metabolism by CYP enzymes and reports a sex-related microsomal Km difference, but no gene variant, genotype, or phenotype effect on a trabectedin PK/PD parameter. |
| PGx | Canese_2019 | not_relevant | 0 | 0 | The paper reports trabectedin-induced imaging and metabolomic changes, but does not assess gene variants, genotypes, or phenotypes. |
| PGx | Duan_2009 | not_relevant | 1 | 0 | ABCB1 overexpression was not shown to cause trabectedin resistance; knockdown did not sensitize cells, and no PK/PD parameter effect was reported. |
| popPK | Fetterly_2008 | relevant | 8 | 1 | The population PKPD model concerns trabectedin, but the reported numeric values are pharmacodynamic and no trabectedin disposition parameters are shown. |
| popPK | Gallo_2024 | irrelevant | 0 | 0 | This is an in-vitro cytotoxicity study of an ascidian extract, with trabectedin mentioned only as background and no PK parameters reported. |
| PD | Gallo_2024 | not_relevant | 0 | 0 | The paper studies a crude organic extract from Ciona robusta, not the specific drug trabectedin, and reports no PK/PD modeling or exposure-response relationship for trabectedin. |
| PGx | Gastaud_2013 | not_relevant | 0 | 0 | ERCC5 genotype is associated with clinical response to trabectedin, but no pharmacokinetic or pharmacodynamic parameter is reported. |
| popPK | Grosso_2012 | relevant | 8 | 2 | The human study evaluates trabectedin clearance in a population-PK model, but numeric parameter values are not readable in the provided evidence and appear to be in Table 5/Fig. 2. |
| PGx | Jimeno_2006 | not_relevant | 0 | 0 | This review discusses pharmacogenomic markers of tumor response to trabectedin, not gene-related changes in a trabectedin pharmacokinetic or pharmacodynamic parameter. |
| PGx | Kono_2026 | not_relevant | 0 | 0 | The paper compares species-specific tumor transcriptomic responses and trabectedin sensitivity but does not report a gene variant, genotype, or phenotype effect on a trabectedin PK or PD parameter. |
| PGx | Larsson_2023 | not_relevant | 0 | 0 | The paper reports tumor drug-response experiments and tumor genomic alterations, but does not relate a genotype or phenotype to a trabectedin PK or PD parameter. |
| PGx | Le_2009 | not_relevant | 0 | 0 | This review discusses trabectedin clinical trials but reports no pharmacogenomic effects on its PK or PD parameters. |
| PGx | Leporini_2014 | not_relevant | 0 | 0 | The review discusses CYP3A4-mediated metabolism and drug interactions, but reports no gene variant, genotype, or phenotype effect on trabectedin PK or PD. |
| PGx | Machiels_2014 | not_relevant | 0 | 0 | The paper reports drug–drug interactions with CYP3A4 inducers and inhibitors, not effects of genetic variants, genotypes, or phenotypes on trabectedin PK/PD. |
| popPK | Miao_2016 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic cell-cycle study and reports no trabectedin disposition parameters. |
| popPK | Miao_2016_2 | irrelevant | 0 | 0 | This in-vitro pharmacodynamic study reports no trabectedin disposition parameters. |
| popPK | Miao_2024 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study and reports no quantitative pharmacokinetic parameters. |
| popPK | Miao_2024_2 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study and reports no trabectedin disposition parameters. |
| PD | Miao_2024_2 | not_relevant | 4 | 2 | The paper describes a systems pharmacodynamic model based on proteomic data in cell lines, but the provided text does not contain specific numeric PD parameters (e.g., EC50, Emax) or explicit concentration-effect curves for trabectedin. |
| PGx | Minuzzo_2005 | not_relevant | 0 | 0 | The paper describes cellular transcriptional effects of trabectedin but does not assess genetic variation or genotype-related PK/PD parameters. |
| PGx | Monk_2015 | not_relevant | 1 | 8 | BRCA1/XPG status is associated with clinical outcomes, but the paper reports no pharmacokinetic or pharmacodynamic parameter for trabectedin. |
| PGx | Rao_2019 | not_relevant | 0 | 0 | The text is a general review and reports no trabectedin-specific gene effect on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Sessa_2013 | relevant | 9 | 0 | This is a human trabectedin pharmacokinetic study, but no numeric disposition parameter values appear in the provided evidence. |
| PGx | Shinn_2021 | not_relevant | 0 | 0 | The text discusses lurbinectedin and mentions trabectedin only in relation to cardiotoxicity; it reports no pharmacogenomic effect on a trabectedin PK or PD parameter. |
| PGx | Uboldi_2017 | not_relevant | 0 | 0 | The study examines trabectedin's effects on EWS-WT1 expression and function in tumor cells, not how a genetic variant or phenotype changes a trabectedin PK/PD parameter. |
| PGx | Vermeir_2009 | not_relevant | 0 | 0 | Describes in vitro CYP-mediated metabolism but does not report a gene variant, genotype, or phenotype effect on a trabectedin PK or PD parameter. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 14:02 UTC</sub>
