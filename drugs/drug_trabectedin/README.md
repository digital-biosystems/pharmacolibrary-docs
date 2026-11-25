<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;trabectedin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trabectedin_Poggesi2019_reference&quot;,&quot;label&quot;:&quot;Poggesi_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trabectedin/Trabectedin_Poggesi2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# trabectedin

- **generic name:** trabectedin
- **ATC codes:** `L01CX01`
- **DrugBank:** [DB05109](https://go.drugbank.com/drugs/DB05109) · **PubChem:** [CID 108150](https://pubchem.ncbi.nlm.nih.gov/compound/108150)
- **molar mass:** 761.837 g/mol (C39H43N3O11S) — DrugBank
- **groups:** approved, investigational

## About

Trabectedin is an alkylating antineoplastic agent used to treat advanced soft-tissue sarcoma and ovarian cancer. It is given by intravenous injection.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q2637746](https://www.wikidata.org/wiki/Q2637746), [Wikipedia](https://en.wikipedia.org/wiki/Trabectedin?oldid=1373361314) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| trabectedin | parent | 761.837 | C39H43N3O11S | DrugBank | [108150](https://pubchem.ncbi.nlm.nih.gov/compound/108150) | Perez-Ruixo_2007, Poggesi_2019 |

## Start here

> **Poggesi_2019_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> children and adolescent patients with cancer. [Run it in the simulator](drugs/drug_trabectedin/Trabectedin_Poggesi2019_reference.md?tab=Simulation) · [record](drugs/drug_trabectedin/Trabectedin_Poggesi2019_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Perez-Ruixo_2007 · CL</text><circle cx="364.4" cy="30.0" r="4" fill="#ef6c00"><title>Perez-Ruixo_2007 · CL: 31.5 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Poggesi_2019 · CL</text><circle cx="386.4" cy="46.0" r="4" fill="#ef6c00"><title>Poggesi_2019 · CL: 36.4 L/h</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Perez-Ruixo_2007_reference](drugs/drug_trabectedin/Trabectedin_PerezRuixo2007_reference.md) | — | 1-compartment (no model) | 2 | Perez-Ruixo JJ et al., Population pharmacokinetic meta-analysi…, Clinical pharmacokinetics (2007) | [10.2165/00003088-200746100-00005](https://doi.org/10.2165/00003088-200746100-00005) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: cross_check_disputed</sub> | [Poggesi_2019_reference](drugs/drug_trabectedin/Trabectedin_Poggesi2019_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Poggesi I et al., Population pharmacokinetics of trabecte…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-019-03899-y](https://doi.org/10.1007/s00280-019-03899-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Fetterly_2008_ALT](drugs/drug_trabectedin/pd_Fetterly_2008_ALT.md) | alanine aminotransferase ← trabectedin · indirect response — drug stimulates the loss of alanine aminotransferase | — | Fetterly GJ et al., Semimechanistic pharmacokinetic/pharmac…, Cancer chemotherapy and pha… (2008) | [10.1007/s00280-007-0583-8](https://doi.org/10.1007/s00280-007-0583-8) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hing_2008_ANC](drugs/drug_trabectedin/pd_Hing_2008_ANC.md) | absolute neutrophil counts ← trabectedin · disease-progression model | — | Hing J et al., Mechanism-based pharmacokinetic/pharmac…, Clinical pharmacology and t… (2008) | [10.1038/sj.clpt.6100259](https://doi.org/10.1038/sj.clpt.6100259) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_G0_G1](drugs/drug_trabectedin/pd_Miao_2016_G0_G1.md) | Cell number in G0/G1 phase ← trabectedin · inhibition effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_G0_G1_2](drugs/drug_trabectedin/pd_Miao_2016_G0_G1_2.md) | Cell number in G0/G1 phase ← trabectedin · inhibition effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_G2_M](drugs/drug_trabectedin/pd_Miao_2016_G2_M.md) | Cell number in G2/M phase ← trabectedin · inhibition effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_G2_M_2](drugs/drug_trabectedin/pd_Miao_2016_G2_M_2.md) | Cell number in G2/M phase ← trabectedin · inhibition effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_Rtot](drugs/drug_trabectedin/pd_Miao_2016_Rtot.md) | Total cell number ← trabectedin · inhibition effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_Rtot_2](drugs/drug_trabectedin/pd_Miao_2016_Rtot_2.md) | Total cell number ← trabectedin · inhibition effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_S](drugs/drug_trabectedin/pd_Miao_2016_S.md) | Cell number in S phase ← trabectedin · inhibition effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_S_2](drugs/drug_trabectedin/pd_Miao_2016_S_2.md) | Cell number in S phase ← trabectedin · inhibition effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_sub_G1](drugs/drug_trabectedin/pd_Miao_2016_sub_G1.md) | Cell number in sub G1 phase ← trabectedin · stimulation effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_sub_G1_2](drugs/drug_trabectedin/pd_Miao_2016_sub_G1_2.md) | Cell number in sub G1 phase ← trabectedin · stimulation effect | — | Miao X et al., Pharmacodynamic Modeling of Cell Cycle…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00421](https://doi.org/10.3389/fphar.2016.00421) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Miao_2016_2_Viable_cells](drugs/drug_trabectedin/pd_Miao_2016_2_Viable_cells.md) | Viable cell numbers ← trabectedin · inhibition effect | — | Miao X et al., Pharmacodynamic modeling of combined ch…, Cancer chemotherapy and pha… (2016) | [10.1007/s00280-015-2907-4](https://doi.org/10.1007/s00280-015-2907-4) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **BRCA1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Laroche-Clary_2015](drugs/drug_trabectedin/pgx_Laroche_Clary_2015_BRCA1_Q100.md) | Laroche-Clary A et al., BRCA1 haplotype and clinical benefit of…, British journal of cancer (2015) | [10.1038/bjc.2014.624](https://doi.org/10.1038/bjc.2014.624) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Maillard_2020](drugs/drug_trabectedin/pgx_Maillard_2020_ABCB1_Q100.md) | Maillard M et al., Pharmacogenetic Study of Trabectedin-In…, Cancers (2020) | [10.3390/cancers12123647](https://doi.org/10.3390/cancers12123647) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCC2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Maillard_2020](drugs/drug_trabectedin/pgx_Maillard_2020_ABCC2_Q100.md) | Maillard M et al., Pharmacogenetic Study of Trabectedin-In…, Cancers (2020) | [10.3390/cancers12123647](https://doi.org/10.3390/cancers12123647) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCC3** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Maillard_2020](drugs/drug_trabectedin/pgx_Maillard_2020_ABCC3_Q100.md) | Maillard M et al., Pharmacogenetic Study of Trabectedin-In…, Cancers (2020) | [10.3390/cancers12123647](https://doi.org/10.3390/cancers12123647) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCC4** | `Q328` · kout | transport | [Maillard_2020](drugs/drug_trabectedin/pgx_Maillard_2020_ABCC4_Q328.md) | Maillard M et al., Pharmacogenetic Study of Trabectedin-In…, Cancers (2020) | [10.3390/cancers12123647](https://doi.org/10.3390/cancers12123647) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCG2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Maillard_2020](drugs/drug_trabectedin/pgx_Maillard_2020_ABCG2_Q100.md) | Maillard M et al., Pharmacogenetic Study of Trabectedin-In…, Cancers (2020) | [10.3390/cancers12123647](https://doi.org/10.3390/cancers12123647) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP3A5** | `Q305` · kfm | formation | [Maillard_2020](drugs/drug_trabectedin/pgx_Maillard_2020_CYP3A5_Q305.md) | Maillard M et al., Pharmacogenetic Study of Trabectedin-In…, Cancers (2020) | [10.3390/cancers12123647](https://doi.org/10.3390/cancers12123647) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 08:05 | 0:07 | 2/0/0 | 13/0/0 | 0/0/7 | 4,298/184 | einfracz / qwen3.8-27b | 9 | 0/9 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 44 matched, 44 returned
- **screened:** 10  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Beumer_2007.pdf` | Beumer JH et al., Metabolism of trabectedin (ET-743, Yond…, Cancer chemotherapy and pha… (2007) | pgx | 8 | [10.1007/s00280-006-0342-2](https://doi.org/10.1007/s00280-006-0342-2) | [16988825](https://www.ncbi.nlm.nih.gov/pubmed/16988825) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Leporini_2014.pdf` | Leporini C et al., A comprehensive safety evaluation of tr…, BioDrugs : clinical immunot… (2014) | pgx | 7 | [10.1007/s40259-014-0100-7](https://doi.org/10.1007/s40259-014-0100-7) | [25209722](https://www.ncbi.nlm.nih.gov/pubmed/25209722) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-24 08:05 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beumer_2007 | irrelevant | 1 | 0 | The study is a mass-balance and metabolite identification study using radiolabeled drug, focusing on qualitative metabolic pathways rather than quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Beumer_2007 | not_relevant | 3 | 2 | The paper reports that inter-individual metabolic differences did not correlate with polymorphisms in specific drug-metabolising enzymes, thus failing to demonstrate a specific pharmacogenomic effect on a PK parameter. |
| popPK | Beumer_2010 | relevant | 8 | 1 | The study reports trabectedin PK in mice, including plasma clearance, but specific numeric values are not present in the provided evidence. |
| popPK | Brandon_2006 | irrelevant | 1 | 0 | The study focuses on in vitro metabolic characterization (CYP phenotyping, Km/Vmax) rather than reporting quantitative disposition parameters (CL, V, t1/2) or PK models for trabectedin. |
| PGx | Brandon_2006 | not_relevant | 0 | 0 | The paper reports general in vitro CYP enzyme phenotypes and a sex-based difference in Km, but does not report specific genetic variants or genotypes affecting pharmacokinetic or pharmacodynamic parameters. |
| popPK | Canese_2019 | irrelevant | 0 | 0 | The study reports pharmacodynamic and molecular imaging effects of trabectedin, not pharmacokinetic parameters such as clearance or volume. |
| PGx | Canese_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of trabectedin using MRI/MRS imaging in a preclinical model, but it does not report any pharmacogenomic analysis (genetic variants or genotypes) influencing these parameters. |
| popPK | Duan_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation into multidrug resistance in cell lines, containing no pharmacokinetic parameters or quantitative disposition data for trabectedin. |
| PGx | Duan_2009 | not_relevant | 5 | 5 | The study examines cross-resistance in cell lines and the role of ABCB1 expression on cytotoxicity (PD), but does not report specific gene variant effects on trabectedin PK or PD parameters in humans or via standard pharmacogenomic markers. |
| popPK | Fetterly_2008 | irrelevant | 0 | 0 | The paper models the pharmacodynamic effect of trabectedin on ALT (liver enzymes) and the protective effect of dexamethasone, without reporting quantitative pharmacokinetic parameters (CL, V, etc.) for trabectedin itself. |
| PGx | Fetterly_2008 | not_relevant | 0 | 0 | The study focuses on population PKPD modeling using clinical covariates (dose, dexamethasone, weight) rather than genetic variants or pharmacogenomics. |
| popPK | Gallo_2024 | irrelevant | 0 | 0 | This is an in-vitro cytotoxicity study of an ascidian extract, with trabectedin mentioned only as background and no PK parameters reported. |
| PD | Gallo_2024 | not_relevant | 0 | 0 | The paper studies a crude organic extract from Ciona robusta, not the specific drug trabectedin, and reports no PK/PD modeling or exposure-response relationship for trabectedin. |
| popPK | Gastaud_2013 | irrelevant | 0 | 0 | The paper is a clinical case report focusing on pharmacogenomics and efficacy (response to treatment), not a pharmacokinetic study reporting disposition parameters. |
| popPK | Grosso_2012 | relevant | 8 | 2 | The human study evaluates trabectedin clearance in a population-PK model, but numeric parameter values are not readable in the provided evidence and appear to be in Table 5/Fig. 2. |
| popPK | Hing_2008 | irrelevant | 1 | 1 | The paper describes a PK/PD model for neutropenia toxicity, reporting effect-compartment and PD parameters (like k(e0) and alpha) rather than the actual disposition parameters (clearance, volume) of trabectedin. |
| PGx | Hing_2008 | not_relevant | 0 | 0 | The study focuses on a general PK/PD model for trabectedin-induced neutropenia and does not report any effects of gene variants, genotypes, or phenotypes. |
| PGx | Jimeno_2006 | not_relevant | 0 | 0 | This review discusses pharmacogenomic markers of tumor response to trabectedin, not gene-related changes in a trabectedin pharmacokinetic or pharmacodynamic parameter. |
| popPK | Kono_2026 | irrelevant | 0 | 0 | The study is a comparative transcriptomics and pharmacogenomics analysis of osteosarcoma cell lines and tissues, focusing on drug sensitivity mechanisms, and does not report any quantitative pharmacokinetic parameters for trabectedin. |
| PGx | Kono_2026 | not_relevant | 0 | 0 | The paper discusses species-specific transcriptomic differences and drug sensitivity mechanisms but does not report specific human gene variants affecting trabectedin pharmacokinetics or pharmacodynamics. |
| PGx | Larsson_2023 | not_relevant | 0 | 0 | The paper reports tumor drug-response experiments and tumor genomic alterations, but does not relate a genotype or phenotype to a trabectedin PK or PD parameter. |
| popPK | Laurenty_2013 | irrelevant | 0 | 0 | This is a case report focusing on the mechanism of hepatotoxicity (pharmacogenetics) and does not report quantitative pharmacokinetic parameters like clearance or volume. |
| popPK | Le_2009 | irrelevant | 0 | 0 | This is a bibliographic review of phase II clinical trials focusing on antitumor efficacy, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PGx | Le_2009 | not_relevant | 0 | 0 | The paper is a bibliographic review of clinical efficacy and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Leporini_2014 | irrelevant | 2 | 0 | This is a review article summarizing safety and PK profiles but does not provide original quantitative disposition parameters (CL, V, etc.) in the text. |
| PGx | Leporini_2014 | not_relevant | 0 | 0 | The paper reviews safety and drug-drug interactions (specifically CYP3A4 metabolism) but does not report on the impact of specific gene variants, genotypes, or phenotypes on trabectedin PK/PD. |
| PGx | Machiels_2014 | not_relevant | 0 | 10 | The study investigates drug-drug interactions with CYP3A4 modulators, not the impact of a patient's genetic variant on pharmacokinetics or pharmacodynamics. |
| popPK | Miao_2016 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic cell-cycle study and reports no trabectedin disposition parameters. |
| popPK | Miao_2016_2 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic (PD) modeling study focusing on cell killing rates and interactions, not pharmacokinetic disposition parameters. |
| PGx | Miao_2016_2 | not_relevant | 0 | 0 | The paper reports in vitro pharmacodynamic modeling of drug combinations but does not investigate or report any pharmacogenomic effects (gene variants/genotypes) on trabectedin's PK or PD parameters. |
| popPK | Miao_2024 | irrelevant | 0 | 0 | This is a systems pharmacodynamic (PD) and proteomic study focused on mechanisms of action in cancer cells, containing no quantitative pharmacokinetic (PK) parameters such as clearance or volume. |
| PGx | Miao_2024 | not_relevant | 0 | 0 | The paper describes a systems pharmacodynamic model of gemcitabine and trabectedin interaction in pancreatic cancer cells and does not report any pharmacogenomic effects based on gene variants. |
| popPK | Miao_2024_2 | irrelevant | 0 | 0 | The study is an in-vitro systems pharmacodynamic (PD) model of signal transduction pathways, not a pharmacokinetic (PK) study, and contains no quantitative PK parameters like clearance or volume. |
| PD | Miao_2024_2 | not_relevant | 4 | 2 | The paper describes a systems pharmacodynamic model based on proteomic data in cell lines, but the provided text does not contain specific numeric PD parameters (e.g., EC50, Emax) or explicit concentration-effect curves for trabectedin. |
| PGx | Miao_2024_2 | not_relevant | 0 | 0 | The paper investigates systems pharmacodynamics of drug combination in cancer cells using proteomics, but it does not report any pharmacogenomic (genetic variant) effects on PK or PD parameters. |
| popPK | Minuzzo_2005 | irrelevant | 0 | 0 | The paper investigates the molecular mechanism of action (transcriptional regulation) of trabectedin in cell lines, not its pharmacokinetic parameters. |
| PGx | Minuzzo_2005 | not_relevant | 0 | 0 | The paper investigates the molecular mechanism of Yondelis (trabectedin) on cell-cycle gene transcription and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Miolo_2016 | irrelevant | 0 | 0 | The paper is a clinical case report focusing on pharmacodynamics (response to treatment) and genetics (BRCA2 mutation), with no quantitative pharmacokinetic parameters for trabectedin. |
| popPK | Monk_2015 | irrelevant | 0 | 0 | The paper reports clinical efficacy and biomarker data, not pharmacokinetic parameters. |
| PGx | Monk_2015 | not_relevant | 0 | 0 | The study reports associations with clinical survival endpoints (OS/PFS), not pharmacokinetic or pharmacodynamic parameters like AUC or Cmax. |
| PGx | Perez-Ruixo_2007 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics but does not investigate any genetic variants, genotypes, or phenotypes. |
| PGx | Poggesi_2019 | not_relevant | 0 | 0 | The study focuses on age and body size effects on pharmacokinetics but does not analyze any gene variants or pharmacogenomic markers. |
| popPK | Rao_2019 | irrelevant | 0 | 0 | The paper is a review on the pharmacogenetics of natural products and does not contain specific quantitative pharmacokinetic parameters for trabectedin. |
| PGx | Rao_2019 | not_relevant | 0 | 0 | The paper is a general review of natural products and does not specifically address trabectedin. |
| popPK | Sessa_2013 | irrelevant | 2 | 0 | The paper discusses PK comparisons but does not provide specific quantitative population PK parameter values (CL, V, etc.) in the evidence, only qualitative trends. |
| PGx | Sessa_2013 | not_relevant | 0 | 0 | The study reports a pharmacokinetic interaction between two drugs (trabectedin and cisplatin), not a pharmacogenomic effect (genotype/phenotype) on PK/PD. |
| popPK | Shinn_2021 | irrelevant | 0 | 0 | The paper is a review of lurbinectedin (a different drug), and trabectedin is mentioned only as a context for cardiotoxicity or relationship to the subject drug, with no PK parameters provided. |
| PGx | Shinn_2021 | not_relevant | 0 | 0 | The paper discusses lurbinectedin and its drug interactions (CYP3A4), but it does not report pharmacogenomic effects (gene variants/genotypes) on the PK or PD parameters of trabectedin. |
| PGx | Uboldi_2017 | not_relevant | 0 | 0 | The study examines trabectedin's effects on EWS-WT1 expression and function in tumor cells, not how a genetic variant or phenotype changes a trabectedin PK/PD parameter. |
| popPK | Vermeir_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of metabolism and CYP phenotyping, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PGx | Vermeir_2009 | not_relevant | 0 | 0 | The paper investigates in vitro metabolism pathways and CYP isoforms but does not report the effect of any specific gene variant, genotype, or phenotype on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | van_2009 | irrelevant | 1 | 0 | The study is primarily a mechanistic investigation of transporters in mice and in vitro cells, reporting plasma and liver levels but lacking specific compartmental population-PK parameters (CL, V, etc.) for the parent drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrabectedin%5D&body=Drug%3A%20trabectedin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trabectedin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 08:04 UTC</sub>
