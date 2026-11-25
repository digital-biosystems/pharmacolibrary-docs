<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;pimozide&quot;}]"></div>

# pimozide

- **generic name:** pimozide
- **ATC codes:** `N05AG02`
- **DrugBank:** [DB01100](https://go.drugbank.com/drugs/DB01100) · **PubChem:** [CID 16362](https://pubchem.ncbi.nlm.nih.gov/compound/16362)
- **molar mass:** 461.5462 g/mol (C28H29F2N3O) — DrugBank
- **groups:** approved

## About

Pimozide is a typical antipsychotic belonging to the diphenylbutylpiperidine class, indicated for treating Tourette syndrome, resistant tics, and other psychiatric disorders. It is administered orally, available in tablet or liquid forms. It remains an approved medication available under the brand name Orap.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q144085](https://www.wikidata.org/wiki/Q144085), [Wikipedia](https://en.wikipedia.org/wiki/Pimozide?oldid=1384039186) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Seo_2023_Kv_currents](drugs/drug_pimozide/pd_Seo_2023_Kv_currents.md) | Kv currents ← pimozide · direct sigmoid Emax (Hill) effect | — | Seo MS et al., The inhibitory effects of pimozide, an…, Drug and chemical toxicology (2023) | [10.1080/01480545.2021.2021932](https://doi.org/10.1080/01480545.2021.2021932) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Vatansever_2021_Mpro_activity](drugs/drug_pimozide/pd_Vatansever_2021_Mpro_activity.md) | Mpro activity (inhibition of SARS-CoV-2 main protease) ← pimozide · direct sigmoid Emax (Hill) effect | — | Vatansever EC et al., Bepridil is potent against SARS-CoV-2 i…, Proceedings of the National… (2021) | [10.1073/pnas.2012201118](https://doi.org/10.1073/pnas.2012201118) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Xia_2004_Ca2_influx](drugs/drug_pimozide/pd_Xia_2004_Ca2_influx.md) | Ca2+ influx ← pimozide · direct sigmoid Emax (Hill) effect | — | Xia M et al., Functional expression of L- and T-type…, Journal of molecular and ce… (2004) | [10.1016/j.yjmcc.2003.10.007](https://doi.org/10.1016/j.yjmcc.2003.10.007) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:48 | 0:04 | 0/0/0 | 2/1/0 | 0/0/0 | 3,946/190 | einfracz / qwen3.8-27b | 15 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al_2026 | relevant | 10 | 0 | The study reports compartmental PK parameters for pimozide in rats, but no specific numeric values for CL, Vd, or half-life are present in the provided abstract text. |
| PGx | Al_2026 | not_relevant | 0 | 0 | The study examines the effect of diet and sex on PK, but does not investigate any gene variant or genotype (pharmacogenomics). |
| popPK | Chen_2022 | irrelevant | 0 | 0 | Pimozide is only a repurposing-screening comparator; the paper studies methotrexate against SARS-CoV-2 with no PK parameters for pimozide. |
| popPK | Cvetkovic_2003_2 | irrelevant | 0 | 0 | This is a review of lopinavir/ritonavir for HIV, and pimozide is only mentioned as a contraindicated drug due to interaction, with no pharmacokinetic parameters for pimozide reported. |
| PGx | Cvetkovic_2003_2 | not_relevant | 0 | 0 | The paper is a review of lopinavir/ritonavir and mentions pimozide only as a contraindication due to CYP3A4 interaction, not discussing pimozide's pharmacogenomics. |
| popPK | Dresser_2000_2 | irrelevant | 0 | 0 | The paper is a review discussing the clinical consequences of CYP3A4 inhibition and mentions pimozide only as a drug associated with QT prolongation in the context of drug interactions, without reporting any pharmacokinetic parameters. |
| PGx | Dresser_2000_2 | not_relevant | 0 | 0 | The paper is a general review of CYP3A4 drug-drug interactions (inhibitors like ketoconazole/ritonavir) rather than a study on genetic variants (pharmacogenomics) affecting pimozide PK/PD. |
| popPK | Newman-Tancredi_1998 | irrelevant | 0 | 0 | This is an in-vitro receptor binding study characterizing pharmacodynamics, not a pharmacokinetic study reporting disposition parameters for pimozide. |
| PGx | Newman-Tancredi_1998 | not_relevant | 0 | 0 | This paper describes the in vitro receptor binding and agonist/antagonist activity of antipsychotics (including pimozide) but does not report on any pharmacogenomic effects on PK/PD parameters. |
| popPK | Papadopoulos_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of protein phosphorylation in adrenal cells where pimozide is used as a calmodulin inhibitor, not as the subject of pharmacokinetic analysis. |
| PGx | Papadopoulos_1990 | not_relevant | 0 | 0 | The paper investigates the mechanism of calmodulin inhibition by pimozide in steroidogenesis and contains no data on gene variants or pharmacogenomics. |
| popPK | Sah_1994 | irrelevant | 0 | 0 | The paper is a mechanistic study of calcium channel inhibition by pimozide and does not contain any pharmacokinetic or disposition parameters. |
| PGx | Sah_1994 | not_relevant | 0 | 0 | The paper reports in vitro electrophysiological effects of pimozide on calcium channels, not pharmacogenomic effects on PK or PD parameters. |
| popPK | Seo_2023 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of pimozide on ion channels in an in vitro model and does not report pharmacokinetic parameters. |
| PGx | Seo_2023 | not_relevant | 0 | 0 | The study investigates the electrophysiological interaction between pimozide and voltage-gated K+ channels; it does not report any pharmacogenomic effects of genetic variants on pimozide's pharmacokinetics or pharmacodynamics. |
| popPK | Vatansever_2021 | irrelevant | 0 | 0 | In vitro SARS-CoV-2 Mpro inhibition study; pimozide is only a screened inhibitor with an IC50, no PK disposition parameters. |
| popPK | Xia_2004 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium channels in HL-1 cells where pimozide is used only as a T-type channel blocker probe, not as the subject drug for PK analysis. |
| PGx | Xia_2004 | not_relevant | 0 | 0 | The paper describes the expression of calcium channels in HL-1 cells and uses pimozide as a T-type channel blocker, but it does not report any pharmacogenomic effects (gene variants altering PK/PD) for pimozide. |
| popPK | Xiong_2019 | irrelevant | 0 | 0 | The study is a pharmacological characterization of a serotonin receptor in silkworms, using pimozide only as a ligand/agonist to determine rank potency, not as a drug for pharmacokinetic analysis. |
| PGx | Xiong_2019 | not_relevant | 0 | 0 | The study analyzes the pharmacology of a silkmoth receptor and mentions pimozide only as a reference agonist potency, without investigating any genetic variant effects on pimozide's PK or PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpimozide%5D&body=Drug%3A%20pimozide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pimozide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
