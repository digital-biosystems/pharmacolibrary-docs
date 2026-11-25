<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;valrubicin&quot;}]"></div>

# valrubicin

- **generic name:** valrubicin
- **ATC codes:** `L01DB09`
- **DrugBank:** [DB00385](https://go.drugbank.com/drugs/DB00385) · **PubChem:** [CID 454216](https://pubchem.ncbi.nlm.nih.gov/compound/454216)
- **molar mass:** 723.651 g/mol (C34H36F3NO13) — DrugBank
- **groups:** approved

## About

Valrubicin is an anthracycline chemotherapy drug used to treat bladder cancer. It is administered as a solution by infusion directly into the bladder for intravesical therapy.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q7912593](https://www.wikidata.org/wiki/Q7912593), [Wikipedia](https://en.wikipedia.org/wiki/Valrubicin?oldid=1371300272) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sabnis_2012_CCK_8_assay](drugs/drug_valrubicin/pd_Sabnis_2012_CCK_8_assay.md) | cell viability ← AD-32 · inhibition effect | — | Sabnis N et al., Enhanced solubility and functionality o…, International journal of na… (2012) | [10.2147/IJN.S28029](https://doi.org/10.2147/IJN.S28029) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:29 | 0:03 | 0/0/0 | 1/0/0 | 0/0/0 | 4,196/167 | einfracz / qwen3.8-27b | 7 | 3/4 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 21 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Shdifat_2026 | irrelevant | 0 | 0 | The study focuses on in vitro physicochemical properties (solubility, stability, binding) of valrubicin-cucurbituril complexes, not pharmacokinetic disposition parameters. |
| PGx | Al-Shdifat_2026 | not_relevant | 0 | 0 | The paper explores physical chemistry and drug delivery using cucurbiturils, not the effect of a genetic variant on PK or PD parameters. |
| popPK | Andersen_2010 | irrelevant | 0 | 0 | The study is a pharmacological/toxicological investigation of valrubicin's anti-tumor effects in a mouse skin cancer model and human cell lines, reporting no pharmacokinetic parameters. |
| PGx | Andersen_2010 | not_relevant | 0 | 0 | The paper reports general pharmacodynamic effects of valrubicin on skin tumors in animal and cell models, but contains no data on gene variants or genotypes influencing PK or PD parameters. |
| popPK | Baby_2021 | irrelevant | 0 | 0 | The study is an in silico molecular docking and dynamics simulation exploring valrubicin as a potential SARS-CoV-2 inhibitor, containing no pharmacokinetic data. |
| PGx | Baby_2021 | not_relevant | 0 | 0 | The paper is an in silico study on drug repurposing for SARS-CoV-2 and does not contain any pharmacogenomic data regarding the PK or PD of valrubicin. |
| popPK | Gul_2023 | irrelevant | 0 | 0 | The paper is an in vitro structural dynamics simulation study focusing on Roxadustat, with valrubicin serving only as a comparative ligand and containing no pharmacokinetic parameters. |
| PGx | Gul_2023 | not_relevant | 0 | 0 | The paper discusses molecular dynamics of PHD2 inhibitors and proposes valrubicin as a therapeutic candidate but does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Islam_2022 | irrelevant | 0 | 0 | This review reports no quantitative valrubicin disposition parameters. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The paper describes a bioinformatics pipeline for drug repurposing targeting fusion proteins (EWSR1::FLI1, KMT2A::AFF1) and does not contain any pharmacokinetic data for valrubicin. |
| PGx | Kumar_2026 | not_relevant | 0 | 0 | The paper focuses on drug repurposing against fusion protein structures (specifically EWSR1::FLI1 and KMT2A::AFF1) using brigatinib, and contains no information regarding valrubicin or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Lau_2017 | irrelevant | 0 | 0 | The paper describes a genetic mouse model for Sanfilippo syndrome and does not involve the drug valrubicin or its pharmacokinetics. |
| PGx | Lau_2017 | not_relevant | 0 | 0 | The paper discusses a mouse model of Sanfilippo syndrome and does not mention valrubicin or any pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Laugesen_2013 | irrelevant | 0 | 0 | The study investigates the mechanistic mode of action (PKC activation) in vitro, not pharmacokinetic disposition parameters. |
| PGx | Laugesen_2013 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of valrubicin via PKC activation but does not report any association with gene variants or genotypes affecting PK or PD parameters. |
| popPK | Mahmud_2021 | irrelevant | 0 | 0 | The paper is an in silico molecular docking study assessing binding affinity to a viral protein, not a pharmacokinetic study of valrubicin. |
| PGx | Mahmud_2021 | not_relevant | 0 | 0 | The paper performs in silico molecular docking to assess antiviral potential against SARS-CoV-2, containing no data on pharmacogenomics or PK/PD parameters. |
| popPK | Onrust_1999 | irrelevant | 0 | 0 | no_text gate: only 35 chars of text extracted (&lt; 400) |
| PGx | Onrust_1999 | not_relevant | 0 | 0 | The provided text consists only of a drug code (C1340 for Valrubicin) and does not contain any pharmacogenomic data or analysis. |
| popPK | Rameika_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on NAT2 metabolism of valrubicin and other drugs, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Rosada_2010 | irrelevant | 0 | 0 | The study investigates the therapeutic efficacy of topical valrubicin in a psoriasis model and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Rosada_2010 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic effects of valrubicin on a psoriasis xenograft model but contains no information regarding gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Rottboell_2015 | irrelevant | 0 | 0 | The paper investigates the antibacterial and anti-inflammatory effects of valrubicin, not its pharmacokinetics. |
| PGx | Rottboell_2015 | not_relevant | 0 | 0 | The paper investigates the anti-inflammatory and antibacterial effects of valrubicin, not the influence of gene variants on its pharmacokinetics or pharmacodynamics. |
| popPK | Sabnis_2012 | irrelevant | 0 | 0 | The paper is an in-vitro drug delivery and cytotoxicity study focusing on nanoparticle formulation and cell uptake, containing no pharmacokinetic parameters (CL, V, ka) for valrubicin. |
| PGx | Sabnis_2012 | not_relevant | 0 | 0 | The paper focuses on drug formulation and nanocarrier delivery efficacy, containing no data on genetic variants or pharmacogenomic effects on valrubicin PK/PD. |
| popPK | Sarma_2025 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of anti-leishmanial activity and does not report pharmacokinetic parameters for valrubicin. |
| PGx | Sarma_2025 | not_relevant | 0 | 0 | The paper investigates the anti-leishmanial activity and mechanism of action (targeting glutathione synthetase) of valrubicin, but does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Smith_2019 | irrelevant | 0 | 0 | The paper focuses on fluid mechanics and biphasic solute transport modeling for intravesical delivery, not on the pharmacokinetics of valrubicin or specific drug disposition parameters. |
| PGx | Smith_2019 | not_relevant | 0 | 0 | The paper analyzes the physical effects of instillation volume on intravesical drug delivery (specifically for valrubicin implied by context or general intravesical therapy) but contains no information regarding gene variants, genotypes, or pharmacogenomics. |
| popPK | Vallejo-Diez_2018 | irrelevant | 0 | 0 | The paper describes the generation of induced pluripotent stem cells for a lysosomal storage disease and does not contain any pharmacokinetic data for valrubicin. |
| PGx | Vallejo-Diez_2018 | not_relevant | 0 | 0 | The paper describes the generation of iPSC lines for Mucopolysaccharydosis IIIB and does not mention valrubicin or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Wani_2000 | irrelevant | 0 | 0 | The study is an in vitro/in vivo efficacy and mechanistic study of valrubicin for tumor treatment, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Wani_2000 | not_relevant | 0 | 0 | The paper reports preclinical efficacy and mechanism of action (PKC inhibition, cell cycle arrest) but does not investigate any gene variants or genetic differences affecting pharmacokinetics or pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvalrubicin%5D&body=Drug%3A%20valrubicin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_valrubicin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
