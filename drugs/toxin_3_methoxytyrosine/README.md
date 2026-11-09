<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;3-Methoxytyrosine&quot;}]"></div>

# 3-Methoxytyrosine

- **generic name:** 3-Methoxytyrosine
- **T3DB:** [T3D4297](http://www.t3db.ca/toxins/T3D4297) · **PubChem:** [CID 1670](https://pubchem.ncbi.nlm.nih.gov/compound/1670)

## About

3-Methoxytyrosine is one of the main biochemical markers for Aromatic L-amino acid decarboxylase (AADC, EC 4.1.1.28) deficiency, an inborn error of metabolism that affects serotonin and dopamine biosynthesis. Patients are usually detected in infancy due to developmental delay, hypotonia, and extrapyramidal movements. Diagnosis is based on an abnormal neurotransmitter metabolite profile in CSF and reduced AADC activity in plasma. 3-methoxytyrosine is elevated in CSF, plasma, and urine..

- **Category:** Animal Toxin, Food Toxin, Natural Toxin
- **Sources and uses:** This is an endogenously produced metabolite found in the human body. It is used in metabolic reactions, catabolic reactions or waste generation.
- **Mechanism of toxicity:** Methoxytyrosine is one of the main biochemical markers for aromatic L-amino acid decarboxylase deficiency, an inborn error of metabolism that affects serotonin and dopamine biosynthesis. 3-Methoxytyrosine is elevated in CSF, plasma, and urine. Catechol-O-methyl transferase is the enzyme in charge of 3-methoxytyrosine formation, which is produced from L-DOPA in many organs. …
- **Health effects:** Chronically high levels of 3-methoxytyrosine are associated with Aromatic L-Amino acid Decarboxylase Deficiency.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4297">T3DB T3D4297</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 7636-26-2</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| 3-Methoxytyrosine | parent | 211.217 | C10H13NO4 | PubChem | [1670](https://pubchem.ncbi.nlm.nih.gov/compound/1670) | Adamiak-Giera_2021 |
| Levodopa | metabolite | 197.19 | C9H11NO4 | PubChem | [6047](https://pubchem.ncbi.nlm.nih.gov/compound/6047) | Adamiak-Giera_2021 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Adamiak-Giera_2021_reference](drugs/toxin_3_methoxytyrosine/D_3Methoxytyrosine_AdamiakGiera2021_reference.md) | — | parent + metabolite (no model) | 14 | Adamiak-Giera U et al., Pharmacokinetics of Levodopa and 3-O-Me…, Pharmaceutics (2021) | [10.3390/pharmaceutics13091395](https://doi.org/10.3390/pharmaceutics13091395) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-09 15:30 | 6:45 | 1/0/0 | 0/0/0 | 0/0/0 | 137,291/8,078 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | AlEissa_2026 | irrelevant | 0 | 0 | The paper is a metabolomic study where 3-methoxytyrosine is listed as one of many endogenous metabolites changed by vaccination, with no toxicokinetic parameters reported for it as a subject substance. |
| PGx | Atwal_2015 | not_relevant | 0 | 0 | The paper describes the diagnosis of a metabolic disorder (AADC deficiency) via metabolomic profiling and does not report pharmacokinetic or pharmacodynamic parameters of 3-methoxytyrosine. |
| popPK | Baas_2001 | irrelevant | 0 | 0 | The paper studies levodopa pharmacokinetics and the metabolite 3-O-methyldopa (3-OMD), not 3-methoxytyrosine (3-MT). |
| PGx | Brennenstuhl_2020 | not_relevant | 0 | 0 | The paper reports a metabolic biomarker assay for disease diagnosis, not a pharmacogenomic effect on a drug parameter. |
| popPK | Dingemanse_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and its metabolites (3-OMD, DOPAC) in the context of benserazide inhibition; 3-methoxytyrosine is not the subject substance and no kinetic parameters for it are reported. |
| PGx | Hyland_2020 | not_relevant | 0 | 0 | The paper reports the prevalence of AADC deficiency and the association of DDC gene variants with the disease phenotype (CSF metabolites), but does not report a pharmacokinetic or pharmacodynamic effect of a gene variant on the drug 3-methoxytyrosine (L-DOPA). |
| popPK | Jorga_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and the effect of tolcapone on 3-O-methyldopa, not the kinetics of 3-methoxytyrosine. |
| popPK | Nakazato_1989 | irrelevant | 0 | 0 | The paper studies L-DOPA, and 3-methoxytyrosine is only a comparator with no kinetic parameters reported. |
| PGx | Pappan_2017 | not_relevant | 2 | 2 | The paper reports that AADC deficiency and carbidopa-levodopa treatment are associated with changes in 3-methoxytyrosine levels, but it does not study the pharmacokinetic or pharmacodynamic parameters of 3-methoxytyrosine itself as a drug. |
| popPK | Ruottinen_1996 | irrelevant | 0 | 0 | The paper studies the effect of entacapone on levodopa and its metabolites (3-O-methyldopa), but does not report quantitative kinetic parameters for 3-methoxytyrosine. |
| popPK | Schuh_1993 | irrelevant | 0 | 0 | The paper focuses on clinical dose-response curves for levodopa and does not report quantitative toxicokinetic parameters for 3-methoxytyrosine. |
| PGx | Tang_2016 | not_relevant | 2 | 0 | The paper reports 3-methoxytyrosine as a metabolite in a transgenic AD mouse model, not as a drug with a pharmacokinetic/pharmacodynamic parameter affected by a gene variant. |
| popPK | Trocóniz_1998 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamics of levodopa and mentions 3-O-methyldopa only to state its negligible role in pharmacodynamics, providing no kinetic parameters for 3-methoxytyrosine. |
| PGx | Wassenberg_2010 | not_relevant | 1 | 0 | The paper studies 3-methoxytyrosine as an experimental substrate to test a metabolic pathway, not as a drug for which pharmacogenomic effects are being characterized. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B3_methoxytyrosine%5D&body=Drug%3A%203_methoxytyrosine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_3_methoxytyrosine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-09 15:28 UTC</sub>
