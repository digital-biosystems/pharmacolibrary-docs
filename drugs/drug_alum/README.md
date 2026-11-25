<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01X&quot;,&quot;href&quot;:&quot;atc/S01X.md&quot;},{&quot;label&quot;:&quot;alum&quot;}]"></div>

# alum

- **generic name:** alum
- **ATC codes:** `S01XA07`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Alum is a class of hydrated double sulfate salts, primarily used as a flocculant in papermaking and industrial processes. It is widely used in industries for water treatment and paper manufacturing, while aluminum hydroxide gel is used in vaccines.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q190527](https://www.wikidata.org/wiki/Q190527), [Wikipedia](https://en.wikipedia.org/wiki/Alum?oldid=1385855187) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Mistry_2025_IFN](drugs/drug_alum/pd_Mistry_2025_IFN.md) | serum IFN-γ ← mANK-101 · delayed effect through transit (transduction) compartments | — | Mistry HB et al., A Pharmacokinetic and Pharmacodynamic M…, Molecular cancer therapeuti… (2025) | [10.1158/1535-7163.MCT-24-1051](https://doi.org/10.1158/1535-7163.MCT-24-1051) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 18:13 | 0:03 | 0/0/0 | 1/0/0 | 0/0/0 | 3,507/164 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Duranceau_2016 | irrelevant | 0 | 0 | This is a toxicology study using a bioluminescence inhibition test on alum sludge as an adsorbent, not a pharmacokinetic study of the drug alum. |
| PGx | Duranceau_2016 | not_relevant | 0 | 0 | The paper reports environmental toxicity screening of adsorbents using a bacterial bioluminescence assay, not pharmacogenomic effects on the PK or PD of alum. |
| popPK | Inglefield_2022 | irrelevant | 0 | 0 | The paper describes an immunological study of TLR agonists and alum as an adjuvant in mice, containing no pharmacokinetic parameters (CL, V, etc.) for alum. |
| PGx | Inglefield_2022 | not_relevant | 0 | 0 | The paper evaluates TLR agonists as vaccine adjuvants in mice, not the pharmacokinetics or pharmacodynamics of alum itself in relation to human genetic variants. |
| popPK | Kaushik_2024 | irrelevant | 0 | 0 | Alum is used as a comparative adjuvant in a mouse immunology study, and the paper reports no pharmacokinetic parameters for alum. |
| PGx | Kaushik_2024 | not_relevant | 0 | 0 | The paper describes TLR7 agonists and their adjuvant activity with alum but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kumar_2024 | irrelevant | 0 | 0 | The study focuses on the immunological adjuvant potential of TLR agonists adsorbed to alum, not on the pharmacokinetic disposition of alum itself. |
| PGx | Kumar_2024 | not_relevant | 0 | 0 | The paper focuses on the chemical optimization of vaccine adjuvants and their interaction with alum, not on human pharmacogenomic or pharmacokinetic/pharmacodynamic parameters. |
| popPK | Kumar_2024_2 | irrelevant | 0 | 0 | The paper describes alum as a vaccine adjuvant and focuses on the immunological activity of TLR agonists, reporting no pharmacokinetic parameters for alum. |
| PGx | Kumar_2024_2 | not_relevant | 0 | 0 | The paper reports on the design of TLR agonists and their interaction with alum as an adjuvant in an animal model, but does not report any pharmacogenomic effects on the PK or PD of alum. |
| popPK | Mistry_2025 | irrelevant | 0 | 0 | The study models the pharmacokinetics of the protein mIL-12-ABP and its alum-anchored conjugate (mANK-101), not alum as a standalone drug. |
| PGx | Mistry_2025 | not_relevant | 0 | 0 | The paper investigates PK/PD of an IL-12 conjugate and mentions alum only as a carrier, with no focus on how gene variants or phenotypes affect these parameters. |
| popPK | Nowak_2022 | irrelevant | 0 | 0 | This is a clinical efficacy trial of GAD-alum immunotherapy in type 1 diabetes reporting CGM/C-peptide outcomes, not pharmacokinetic disposition parameters for alum. |
| popPK | Rodríguez-Álvarez_2017 | irrelevant | 0 | 0 | The paper describes the production and characterization of a recombinant protein (simian Interleukin-15) for vaccine development and does not report pharmacokinetic parameters for alum. |
| PGx | Rodríguez-Álvarez_2017 | not_relevant | 0 | 0 | The paper reports on the production and characterization of recombinant simian IL-15 for a vaccine and does not contain any information about alum, gene variants, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Sastry_2017 | irrelevant | 0 | 0 | This is an immunogenicity/adjuvant study of an RSV vaccine; alum is only used as an adjuvant, with no PK parameters (CL, V, half-life, etc.) reported. |
| popPK | Wang_2018 | irrelevant | 0 | 0 | The paper focuses on the immunological effects of a TLR agonist (Diprovocim), using alum only as a comparator adjuvant without reporting any pharmacokinetic parameters for it. |
| PGx | Wang_2018 | not_relevant | 0 | 0 | The paper reports immunological efficacy and tumor growth inhibition of an adjuvant (Diprovocim) compared to alum, but does not report pharmacokinetic or pharmacodynamic parameters of alum altered by genetic variants. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balum%5D&body=Drug%3A%20alum%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alum/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
