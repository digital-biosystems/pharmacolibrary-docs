<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lapatinib&quot;}]"></div>

# lapatinib

- **generic name:** lapatinib
- **ATC codes:** `L01EH01`
- **DrugBank:** [DB01259](https://go.drugbank.com/drugs/DB01259) · **PubChem:** [CID 208908](https://pubchem.ncbi.nlm.nih.gov/compound/208908)
- **molar mass:** 581.058 g/mol (C29H26ClFN4O4S) — DrugBank
- **groups:** approved, investigational

## About

Lapatinib is a HER2-targeting protein kinase inhibitor used to treat certain breast cancers, including rare breast tumors. It is approved and authorised in the European Union for breast cancer, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420323](https://www.wikidata.org/wiki/Q420323) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lapatinib | parent | 581.058 | C29H26ClFN4O4S | DrugBank | [208908](https://pubchem.ncbi.nlm.nih.gov/compound/208908) | Qi_2023 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 38 | L/h | 38 L/hour | virtual patients with HER2-positive breast cancer | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Qi_2023_reference](drugs/drug_lapatinib/Lapatinib_Qi2023_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Qi_2023_reference](drugs/drug_lapatinib/Lapatinib_Qi2023_reference.md) | — | 1-compartment (no model) | 1 | Qi T et al., Dissecting sources of variability in pa…, European journal of pharmac… (2023) | [10.1016/j.ejps.2023.106467](https://doi.org/10.1016/j.ejps.2023.106467) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Rezai_2011_reference](drugs/drug_lapatinib/Lapatinib_Rezai2011_reference.md) | — | 1-compartment (no model) | 0 | Rezai K et al., Pharmacokinetic evaluation of the vinor…, Cancer chemotherapy and pha… (2011) | [10.1007/s00280-011-1650-8](https://doi.org/10.1007/s00280-011-1650-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span> | [Gorlick_2009_cell_line_growth_inhibition](drugs/drug_lapatinib/pd_Gorlick_2009_cell_line_growth_inhibition.md) | cell line growth inhibition ← lapatinib · inhibition effect | — | Gorlick R et al., Initial testing (stage 1) of lapatinib…, Pediatric blood & cancer (2009) | [10.1002/pbc.21989](https://doi.org/10.1002/pbc.21989) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hernández-Valencia_2025_Cell_viability](drugs/drug_lapatinib/pd_Hern_ndez_Valencia_2025_Cell_viability.md) | Cell viability ← Lapatinib · direct sigmoid Emax (Hill) effect | — | Hernández-Valencia J et al., Lapatinib-Resistant HER2+ Breast Cancer…, International journal of mo… (2025) | [10.3390/ijms26083763](https://doi.org/10.3390/ijms26083763) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 1.00).">human + animal</span> | [Hoshino-Yoshino_2011_efficacy](drugs/drug_lapatinib/pd_Hoshino_Yoshino_2011_efficacy.md) | efficacy ← lapatinib · direct Emax (saturable) effect | — | Hoshino-Yoshino A et al., Bridging from preclinical to clinical s…, Drug metabolism and pharmac… (2011) | [10.2133/dmpk.DMPK-11-RG-043](https://doi.org/10.2133/dmpk.DMPK-11-RG-043) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Howley_2024_PDT](drugs/drug_lapatinib/pd_Howley_2024_PDT.md) | PDT ← lapatinib · stimulation effect | — | Howley R et al., Effectiveness of lapatinib for enhancin…, Photochemistry and photobio… (2024) | [10.1111/php.13936](https://doi.org/10.1111/php.13936) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Howley_2024_PpIX](drugs/drug_lapatinib/pd_Howley_2024_PpIX.md) | ALA-PpIX fluorescence ← lapatinib · stimulation effect | — | Howley R et al., Effectiveness of lapatinib for enhancin…, Photochemistry and photobio… (2024) | [10.1111/php.13936](https://doi.org/10.1111/php.13936) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Leis-Filho_2021_cell_proliferation](drugs/drug_lapatinib/pd_Leis_Filho_2021_cell_proliferation.md) | cell proliferation ← lapatinib · inhibition effect | — | Leis-Filho AF et al., Effects of Lapatinib on HER2-Positive a…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060897](https://doi.org/10.3390/pharmaceutics13060897) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Minematsu_2011_MATE1](drugs/drug_lapatinib/pd_Minematsu_2011_MATE1.md) | [(14)C]metformin transport by MATE1 ← lapatinib · inhibition effect | — | Minematsu T et al., Interactions of tyrosine kinase inhibit…, Molecular cancer therapeuti… (2011) | [10.1158/1535-7163.MCT-10-0731](https://doi.org/10.1158/1535-7163.MCT-10-0731) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Minematsu_2011_MATE2_K](drugs/drug_lapatinib/pd_Minematsu_2011_MATE2_K.md) | [(14)C]metformin transport by MATE2-K ← lapatinib · inhibition effect | — | Minematsu T et al., Interactions of tyrosine kinase inhibit…, Molecular cancer therapeuti… (2011) | [10.1158/1535-7163.MCT-10-0731](https://doi.org/10.1158/1535-7163.MCT-10-0731) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Minematsu_2011_OCT1](drugs/drug_lapatinib/pd_Minematsu_2011_OCT1.md) | [(14)C]metformin transport by OCT1 ← lapatinib · inhibition effect | — | Minematsu T et al., Interactions of tyrosine kinase inhibit…, Molecular cancer therapeuti… (2011) | [10.1158/1535-7163.MCT-10-0731](https://doi.org/10.1158/1535-7163.MCT-10-0731) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Minematsu_2011_OCT2](drugs/drug_lapatinib/pd_Minematsu_2011_OCT2.md) | [(14)C]metformin transport by OCT2 ← lapatinib · inhibition effect | — | Minematsu T et al., Interactions of tyrosine kinase inhibit…, Molecular cancer therapeuti… (2011) | [10.1158/1535-7163.MCT-10-0731](https://doi.org/10.1158/1535-7163.MCT-10-0731) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Minematsu_2011_OCT3](drugs/drug_lapatinib/pd_Minematsu_2011_OCT3.md) | [(14)C]metformin transport by OCT3 ← lapatinib · inhibition effect | — | Minematsu T et al., Interactions of tyrosine kinase inhibit…, Molecular cancer therapeuti… (2011) | [10.1158/1535-7163.MCT-10-0731](https://doi.org/10.1158/1535-7163.MCT-10-0731) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sanachai_2022_3CLpro](drugs/drug_lapatinib/pd_Sanachai_2022_3CLpro.md) | 3CLpro inhibition ← lapatinib · inhibition effect | — | Sanachai K et al., Identification of repurposing therapeut…, PloS one (2022) | [10.1371/journal.pone.0269563](https://doi.org/10.1371/journal.pone.0269563) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sornprasert_2025_viral_production](drugs/drug_lapatinib/pd_Sornprasert_2025_viral_production.md) | viral production ← lapatinib · inhibition effect | — | Sornprasert S et al., Effects of the fatty acid synthase inhi…, Scientific reports (2025) | [10.1038/s41598-025-95346-7](https://doi.org/10.1038/s41598-025-95346-7) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sornprasert_2025_virus_titer](drugs/drug_lapatinib/pd_Sornprasert_2025_virus_titer.md) | virus titer ← lapatinib · inhibition effect | — | Sornprasert S et al., Effects of the fatty acid synthase inhi…, Scientific reports (2025) | [10.1038/s41598-025-95346-7](https://doi.org/10.1038/s41598-025-95346-7) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Zou_2021_antiproliferative_activity_against_A431](drugs/drug_lapatinib/pd_Zou_2021_antiproliferative_activity_against_A431.md) | antiproliferative activity against A431 ← Lapatinib · inhibition effect | — | Zou M et al., Design, synthesis and anticancer evalua…, Bioorganic chemistry (2021) | [10.1016/j.bioorg.2021.105200](https://doi.org/10.1016/j.bioorg.2021.105200) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Zou_2021_antiproliferative_activity_against_SK_BR_3](drugs/drug_lapatinib/pd_Zou_2021_antiproliferative_activity_against_SK_BR_3.md) | antiproliferative activity against SK-BR-3 ← Lapatinib · inhibition effect | — | Zou M et al., Design, synthesis and anticancer evalua…, Bioorganic chemistry (2021) | [10.1016/j.bioorg.2021.105200](https://doi.org/10.1016/j.bioorg.2021.105200) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **EGFR** | `Q322` · IC50 | target | [Huang_2020](drugs/drug_lapatinib/pgx_Huang_2020_EGFR_Q322.md) | Huang LC et al., Quantitative Structure-Mutation-Activit…, BMC bioinformatics (2020) | [10.1186/s12859-020-03842-6](https://doi.org/10.1186/s12859-020-03842-6) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **ABCG2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Inoue_2019](drugs/drug_lapatinib/pgx_Inoue_2019_ABCG2_Q100.md) | Inoue Y et al., Impact of Q141K on the Transport of Epi…, Cells (2019) | [10.3390/cells8070763](https://doi.org/10.3390/cells8070763) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:11 | 27:56 | 0/1/1 | 9/0/0 | 0/0/2 | 393,219/61,673 | openai / gpt-6-luna | 33 | 5/17 | 30/3 | 0 |

## Coverage

- **PubMed hits:** 408 matched, 108 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rezai_2011.pdf` | Rezai K et al., Pharmacokinetic evaluation of the vinor…, Cancer chemotherapy and pha… (2011) | popPK | 10 | [10.1007/s00280-011-1650-8](https://doi.org/10.1007/s00280-011-1650-8) | [21519841](https://pubmed.ncbi.nlm.nih.gov/21519841) | The study reports readable population-PK estimates for lapatinib, including CL, V, and ka. |

<sub>queue written 2026-10-07T01:58:45.167330+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adediji_2025 | irrelevant | 0 | 0 | This is an antiviral activity study and reports no lapatinib pharmacokinetic parameters. |
| PGx | Agustina_2021 | not_relevant | 0 | 0 | The study examines lapatinib inhibition of BCRP and changes in isoflavone metabolite exposure, not a pharmacogenomic effect on lapatinib PK or PD. |
| popPK | Bachovchin_2019 | irrelevant | 0 | 0 | This medicinal-chemistry study reports solubility and antitrypanosomal activity, not lapatinib pharmacokinetic parameters. |
| PGx | Beretta_2017 | not_relevant | 0 | 0 | The review discusses lapatinib interactions with ABC transporters and drug resistance, but reports no gene variant, genotype, or phenotype effect on a lapatinib PK or PD parameter. |
| PGx | Breslin_2017 | not_relevant | 0 | 0 | The paper reports cellular cross-resistance to lapatinib and increased CYP3A4 activity in neratinib-resistant cells, but no gene variant, genotype, or phenotype effect on a lapatinib PK/PD parameter. |
| PGx | Castellino_2012 | not_relevant | 0 | 0 | The paper mentions pharmacogenetics only as a possible disposition factor and reports no genotype-specific lapatinib PK or PD effects. |
| PGx | Chan_2017 | not_relevant | 0 | 0 | The text reports no gene-related effect on a pharmacokinetic or pharmacodynamic parameter of lapatinib. |
| PGx | Chien_2014 | not_relevant | 0 | 0 | The study examines food effects and CYP3A4 inhibition but reports no gene variant, genotype, or phenotype effect on lapatinib PK or PD. |
| PGx | Dai_2015 | not_relevant | 0 | 0 | Reports lapatinib-mediated ABCB1 inhibition and altered exposure of paclitaxel/doxorubicin, but no genetic variant, genotype, or phenotype effect on lapatinib PK/PD. |
| popPK | Davies_2012 | irrelevant | 0 | 0 | Lapatinib is only a co-administered antitumor agent, with no lapatinib pharmacokinetic parameters reported. |
| PGx | Duckett_2010 | not_relevant | 0 | 0 | The text discusses lapatinib metabolism and drug interactions but reports no gene variant, genotype, or phenotype effect on its PK or PD. |
| PGx | Fontana_2014 | not_relevant | 0 | 0 | The paper mentions HLA associations with lapatinib-related liver injury, but reports no pharmacokinetic or pharmacodynamic parameter. |
| PGx | García-Lainez_2021 | not_relevant | 0 | 0 | The paper studies lapatinib and metabolite phototoxicity in vitro, but does not assess gene variants, genotypes, or phenotypes affecting a lapatinib PK or PD parameter. |
| PGx | Greshock_2008 | not_relevant | 1 | 0 | Copy-number alterations predict cell-line lapatinib sensitivity, but the text reports no effect on a pharmacokinetic or pharmacodynamic parameter. |
| PGx | Griner_2013 | not_relevant | 0 | 0 | The study examines adipocytokine-mediated lapatinib resistance in cell lines, not a gene variant, genotype, or phenotype effect on a lapatinib PK or PD parameter. |
| PGx | Hardy_2014 | not_relevant | 0 | 0 | The study examines experimentally induced CYP3A4 activity in cells, not a gene variant, genotype, or phenotype effect on a lapatinib PK or PD parameter. |
| PGx | Hefti_2018 | not_relevant | 0 | 0 | The paper reports HER2 testing utilization, not an effect of a gene variant, genotype, or phenotype on lapatinib PK or PD. |
| popPK | Hernández-Valencia_2025 | irrelevant | 0 | 0 | This in-vitro cancer-resistance study reports drug concentrations and IC50 values, not lapatinib disposition parameters. |
| PGx | Herr_2018 | not_relevant | 0 | 0 | The study tests lapatinib with BRAF inhibitors in cancer cells but does not report a genetic or phenotypic effect on a lapatinib pharmacokinetic or pharmacodynamic parameter. |
| PGx | Ho_2015 | not_relevant | 1 | 0 | Genetic polymorphisms are mentioned as a possible modifier, but no specific genotype effect on a lapatinib PK or PD parameter is reported. |
| popPK | Hoshino-Yoshino_2011 | irrelevant | 2 | 0 | It compares AUC exposure but gives no readable numeric lapatinib disposition parameters in the provided evidence. |
| popPK | Howley_2024 | irrelevant | 0 | 0 | This is an in-vitro cell-line study reporting fluorescence and PDT effects, not lapatinib disposition parameters. |
| PGx | Huang_2019 | not_relevant | 0 | 0 | The text reports computational reaction mechanisms and does not describe gene variants or genotype/phenotype effects on lapatinib PK or PD. |
| PGx | Hudachek_2013 | not_relevant | 0 | 0 | The paper reports a lapatinib–docetaxel drug interaction in mice, not an effect of a gene variant, genotype, or phenotype on lapatinib PK or PD. |
| PGx | Huijberts_2020 | not_relevant | 0 | 0 | The study enrolls patients with KRAS-mutant tumors but does not report a genotype-dependent effect on lapatinib pharmacokinetic or pharmacodynamic parameters. |
| PGx | Jabbarzadeh_2020 | not_relevant | 0 | 0 | This review mentions lapatinib resistance but does not report a gene variant, genotype, or phenotype effect on a lapatinib PK or PD parameter. |
| PGx | Kaniwa_2013 | not_relevant | 0 | 0 | Reports an HLA-DQA1*02:01 association with lapatinib-induced liver injury, not a pharmacokinetic or pharmacodynamic parameter. |
| PGx | Koch_2015 | not_relevant | 0 | 0 | The paper reports a lapatinib–digoxin drug interaction, not a gene variant/genotype/phenotype effect on lapatinib PK or PD. |
| PGx | Koch_2017 | not_relevant | 0 | 0 | The study reports lapatinib’s effect on midazolam metabolism, not a genetic effect on a lapatinib PK or PD parameter. |
| PGx | Korprasertthaworn_2019 | not_relevant | 0 | 0 | The paper reports in vitro UGT enzyme inhibition by kinase inhibitors, not a genetic variant or phenotype effect on lapatinib PK or PD. |
| popPK | Li_2017 | irrelevant | 0 | 0 | Lapatinib is only part of the comparator regimen, and no lapatinib disposition parameters are reported. |
| PGx | Lin_2014 | not_relevant | 0 | 0 | The paper studies allitinib metabolism and enzyme involvement, but reports no genetic variant, genotype, or phenotype effect on lapatinib PK or PD. |
| popPK | Liu_2013 | irrelevant | 0 | 0 | This clinical efficacy study reports no quantitative lapatinib pharmacokinetic parameters. |
| PGx | Liu_2022 | not_relevant | 0 | 0 | The paper reports an organoid lapatinib IC50 but does not associate it with a gene variant, genotype, or phenotype. |
| popPK | LoRusso_2011 | irrelevant | 0 | 0 | This review reports T-DM1 pharmacokinetics, while lapatinib is only mentioned as a comparator and in refractory models. |
| PGx | Madrid-Paredes_2015 | not_relevant | 0 | 0 | The review discusses biomarkers of resistance to HER2-targeted therapies but reports no gene-related change in a lapatinib PK or PD parameter. |
| PGx | Madrid-Paredes_2015_2 | not_relevant | 0 | 0 | The review discusses biomarkers of resistance to HER2-targeted therapy, not gene-related changes in a lapatinib pharmacokinetic or pharmacodynamic parameter. |
| PGx | McCorkle_2021 | not_relevant | 0 | 0 | The paper studies lapatinib inhibition of ABCB1 and its effect on paclitaxel response, not how a genetic variant, genotype, or phenotype changes a lapatinib PK or PD parameter. |
| PGx | Minematsu_2011 | not_relevant | 0 | 0 | The OCT1 M420del variant affected sensitivity to erlotinib inhibition, not a lapatinib PK or PD parameter. |
| PGx | Miners_2017 | not_relevant | 0 | 0 | The study examines lapatinib inhibition of UGT enzymes in vitro, not how a genetic variant, genotype, or phenotype changes a lapatinib PK or PD parameter. |
| popPK | Patel_2013 | irrelevant | 0 | 0 | This is an in-vitro drug-discovery study and reports no quantitative pharmacokinetic parameters for lapatinib. |
| PGx | Radic-Sarikas_2017 | not_relevant | 0 | 0 | The study examines lapatinib inhibition of ABCB1 and its effect on intracellular YM155, not a genetic effect on a lapatinib PK or PD parameter. |
| PGx | Rocha-Lima_2007 | not_relevant | 0 | 0 | This review does not report a gene variant or genotype effect on any lapatinib pharmacokinetic or pharmacodynamic parameter. |
| PGx | Scheffler_2011 | not_relevant | 0 | 0 | The text reports pharmacogenomic effects for gefitinib and erlotinib, but none for lapatinib. |
| popPK | Schindler_2018 | irrelevant | 1 | 0 | Lapatinib is only part of the active-control treatment, and no lapatinib disposition parameters are reported. |
| PGx | Singla_2020 | not_relevant | 0 | 0 | The text discusses lapatinib generally but reports no gene variant or phenotype effect on its PK or PD parameters. |
| PGx | Smith_2009 | not_relevant | 0 | 0 | The study reports effects of ketoconazole and carbamazepine on lapatinib pharmacokinetics, not effects of a gene variant, genotype, or phenotype. |
| popPK | Sornprasert_2025 | irrelevant | 0 | 0 | This is an in-vitro antiviral study and reports no lapatinib disposition parameters. |
| PGx | Spraggs_2012 | not_relevant | 1 | 0 | Genotypes are associated with liver-injury outcomes, not a lapatinib pharmacokinetic or pharmacodynamic parameter. |
| PGx | Sundby_2015 | not_relevant | 0 | 0 | The paper reports in vitro drug and transporter findings but no gene variant, genotype, or phenotype effect on a lapatinib PK or PD parameter. |
| PGx | Taguchi_2015 | not_relevant | 0 | 0 | The report describes a capecitabine–phenytoin drug interaction, not a genetic effect on a lapatinib PK or PD parameter. |
| PGx | Tan_2014 | not_relevant | 0 | 0 | The paper reports drug–drug effects on paclitaxel and lapatinib pharmacokinetics, but no gene variant, genotype, or phenotype effects. |
| popPK | Wang_2014 | irrelevant | 0 | 0 | Lapatinib is only part of the active control arm, with no lapatinib disposition parameters reported. |
| PGx | Wellmann_2018 | not_relevant | 0 | 0 | The paper mentions an HLA-DQA1 association for lapatinib but reports no effect on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Whitcher_2011 | irrelevant | 1 | 0 | The reported K(trans) values describe DCE-MRI contrast-agent kinetics, not lapatinib disposition. |
| popPK | Woodring_2015 | irrelevant | 0 | 0 | This is an in-vitro antiparasitic screening study and reports no lapatinib disposition parameters. |
| popPK | Yao_2009 | irrelevant | 0 | 0 | Lapatinib is only a combination-treatment agent, and no pharmacokinetic parameters are reported. |
| PGx | Yashiro_2011 | not_relevant | 0 | 0 | The study reports cellular gene-expression changes during lapatinib combination treatment, not a gene variant, genotype, or phenotype effect on a lapatinib PK or PD parameter. |
| PGx | Zhang_2015 | not_relevant | 0 | 0 | The paper studies lapatinib’s inhibition of UGT enzymes and predicted drug–drug interactions, not how a genetic variant, genotype, or phenotype affects lapatinib’s PK or PD. |
| PGx | Zhang_2017_2 | not_relevant | 0 | 0 | ABCG2 overexpression is studied as a mechanism of resistance to mitoxantrone and topotecan; no pharmacogenomic effect on lapatinib PK or PD is reported. |
| PGx | unknown_2014 | not_relevant | 0 | 0 | No gene variant, genotype, or phenotype effect on a lapatinib PK or PD parameter is reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 01:59 UTC</sub>
