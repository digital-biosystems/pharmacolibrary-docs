<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;pyrvinium&quot;}]"></div>

# pyrvinium

- **generic name:** pyrvinium
- **ATC codes:** `P02CX01`
- **DrugBank:** [DB06816](https://go.drugbank.com/drugs/DB06816) · **PubChem:** [CID 5281035](https://pubchem.ncbi.nlm.nih.gov/compound/5281035)
- **molar mass:** 382.53 g/mol (C26H28N3) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Pyrvinium is an anthelmintic medication used to treat parasitic worm infections. It is given orally in forms such as suspensions or pills, though it is poorly absorbed by the stomach and intestines. It has been withdrawn from use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q264039](https://www.wikidata.org/wiki/Q264039), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Thorne_2010_CK1](drugs/drug_pyrvinium/pd_Thorne_2010_CK1.md) | CK1 activity (Axin phosphorylation) ← pyrvinium · direct sigmoid Emax (Hill) effect | — | Thorne CA et al., Small-molecule inhibition of Wnt signal…, Nature chemical biology (2010) | [10.1038/nchembio.453](https://doi.org/10.1038/nchembio.453) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Thorne_2010_Pygopus](drugs/drug_pyrvinium/pd_Thorne_2010_Pygopus.md) | Pygopus degradation ← pyrvinium · direct sigmoid Emax (Hill) effect | — | Thorne CA et al., Small-molecule inhibition of Wnt signal…, Nature chemical biology (2010) | [10.1038/nchembio.453](https://doi.org/10.1038/nchembio.453) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Thorne_2010_TOPflash](drugs/drug_pyrvinium/pd_Thorne_2010_TOPflash.md) | TOPflash luciferase activity ← pyrvinium · direct sigmoid Emax (Hill) effect | — | Thorne CA et al., Small-molecule inhibition of Wnt signal…, Nature chemical biology (2010) | [10.1038/nchembio.453](https://doi.org/10.1038/nchembio.453) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Thorne_2010_TOPflash_S2](drugs/drug_pyrvinium/pd_Thorne_2010_TOPflash_S2.md) | Wingless (Wg)-mediated gene transcription ← pyrvinium · direct sigmoid Emax (Hill) effect | — | Thorne CA et al., Small-molecule inhibition of Wnt signal…, Nature chemical biology (2010) | [10.1038/nchembio.453](https://doi.org/10.1038/nchembio.453) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:14 | 0:03 | 0/0/0 | 4/0/0 | 0/0/0 | 3,952/158 | einfracz / qwen3.8-27b | 1 | 0/1 | 0/1 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brambillasca_2024 | irrelevant | 0 | 0 | The paper focuses on the mechanism of macropinocytosis inhibition in cancer cells and does not report pharmacokinetic parameters for pyrvinium. |
| PGx | Brambillasca_2024 | not_relevant | 0 | 0 | The paper studies the pharmacological mechanism of pyrvinium as an inhibitor of macropinocytosis in cancer cells, not a pharmacogenomic effect on its PK/PD parameters. |
| popPK | Thorne_2010 | irrelevant | 0 | 0 | The paper investigates pyrvinium as a pharmacological inhibitor of the Wnt signaling pathway and does not report any pharmacokinetic parameters (such as clearance, volume, or half-life of the drug itself). |
| PGx | Thorne_2010 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of pyrvinium on Wnt signaling and CK1α but does not report any pharmacogenomic effects on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyrvinium%5D&body=Drug%3A%20pyrvinium%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pyrvinium/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
