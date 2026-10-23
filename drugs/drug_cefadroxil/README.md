<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefadroxil&quot;}]"></div>

# cefadroxil

- **generic name:** cefadroxil
- **ATC codes:** `J01DB05`
- **DrugBank:** [DB01140](https://go.drugbank.com/drugs/DB01140) · **PubChem:** [CID 47965](https://pubchem.ncbi.nlm.nih.gov/compound/47965)
- **molar mass:** 363.388 g/mol (C16H17N3O5S) — DrugBank
- **groups:** approved, investigational, vet_approved, withdrawn

## About

Cefadroxil is a first-generation cephalosporin antibiotic used to treat bacterial infections such as impetigo, pharyngitis, and urinary tract infections. It is an approved antibacterial used in human medicine and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2319020](https://www.wikidata.org/wiki/Q2319020) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefadroxil | parent | 363.388 | C16H17N3O5S | DrugBank | [47965](https://pubchem.ncbi.nlm.nih.gov/compound/47965) | Mariño_1981, Wilson_1985, Xie_2016 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Haynes_2024_reference](drugs/drug_cefadroxil/Cefadroxil_Haynes2024_reference.md) | — | 1-compartment (no model) | 0 | Haynes AS et al., Cefadroxil and cephalexin pharmacokinet…, Antimicrobial agents and ch… (2024) | [10.1128/aac.00182-24](https://doi.org/10.1128/aac.00182-24) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Mariño_1981_reference](drugs/drug_cefadroxil/Cefadroxil_Mario1981_reference.md) | — | 1-compartment (no model) | 1 | Mariño EL et al., The pharmacokinetics of cefadroxil asso…, International journal of cl… (1981) | — |
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Wilson_1985_reference](drugs/drug_cefadroxil/Cefadroxil_Wilson1985_reference.md) | — | 1-compartment (no model) | 4 | Wilson WD et al., Cefadroxil in the horse: pharmacokineti…, Journal of veterinary pharm… (1985) | [10.1111/j.1365-2885.1985.tb00953.x](https://doi.org/10.1111/j.1365-2885.1985.tb00953.x) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Xie_2016_reference](drugs/drug_cefadroxil/Cefadroxil_Xie2016_reference.md) | — | 1-compartment (no model) | 1 | Xie Y et al., Population pharmacokinetic modeling of…, Xenobiotica; the fate of fo… (2016) | [10.3109/00498254.2015.1080881](https://doi.org/10.3109/00498254.2015.1080881) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:44 | 0:58 | 0/4/0 | 0/0/0 | 0/0/0 | 52,297/3,848 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Haynes_2024.pdf` | Haynes AS et al., Cefadroxil and cephalexin pharmacokinet…, Antimicrobial agents and ch… (2024) | popPK | 10 | [10.1128/aac.00182-24](https://doi.org/10.1128/aac.00182-24) | [38597672](https://pubmed.ncbi.nlm.nih.gov/38597672) | The abstract reports a quantitative PK half-life (1.61 h) and model structure for cefadroxil, but other detailed numeric parameters (CL, V, ka) are not explicitly listed in the provided evidence, suggesting they reside in the full text or tables not included. |
| `Wilson_1985.pdf` | Wilson WD et al., Cefadroxil in the horse: pharmacokineti…, Journal of veterinary pharm… (1985) | popPK | 10 | [10.1111/j.1365-2885.1985.tb00953.x](https://doi.org/10.1111/j.1365-2885.1985.tb00953.x) | [4057345](https://pubmed.ncbi.nlm.nih.gov/4057345) | The study reports specific quantitative pharmacokinetic parameters (clearance, volume, half-life) for cefadroxil in horses, with values directly readable in the text. |
| `Xie_2016.pdf` | Xie Y et al., Population pharmacokinetic modeling of…, Xenobiotica; the fate of fo… (2016) | popPK | 10 | [10.3109/00498254.2015.1080881](https://doi.org/10.3109/00498254.2015.1080881) | [26372256](https://pubmed.ncbi.nlm.nih.gov/26372256) | The paper reports quantitative population pharmacokinetic parameters (V1, V2, Q, elimination rates) for cefadroxil in mice, with values explicitly provided in the text. |
| `Mariño_1981.pdf` | Mariño EL et al., The pharmacokinetics of cefadroxil asso…, International journal of cl… (1981) | popPK | 9 | not captured | [6795136](https://pubmed.ncbi.nlm.nih.gov/6795136) | The study reports quantitative pharmacokinetic parameters (half-life, volume of distribution, lag time) for cefadroxil in humans, with values explicitly stated in the abstract. |
| `Mariño_1982.pdf` | Mariño EL et al., Influence of dosage form and administra…, International journal of cl… (1982) | popPK | 9 | not captured | [7061182](https://pubmed.ncbi.nlm.nih.gov/7061182) | The study is a PK study for cefadroxil in humans, but no numeric parameter values are provided in the evidence. |

<sub>queue written 2026-10-07T10:43:40.544994+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hautz_2016 | irrelevant | 0 | 0 | The paper is a study on diagnostic error rates in emergency rooms and contains no pharmacokinetic data or mention of cefadroxil. |
| popPK | Ikeda_2016 | irrelevant | 0 | 0 | The paper is about the stability of liposomes and interactions with cyclodextrins, and does not study the pharmacokinetics of cefadroxil. |
| popPK | Jones_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of savolitinib in mice, not cefadroxil. |
| popPK | Marchand_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of amoxicillin in rats, using cefadroxil only as a reference for probe recovery in microdialysis, not as the subject of PK modeling. |
| popPK | Mariño_1982 | relevant | 9 | 0 | The study is a PK study for cefadroxil in humans, but no numeric parameter values are provided in the evidence. |
| popPK | Pachiappan_2005 | irrelevant | 0 | 0 | The paper is a study on the neurotoxic effects of candoxin (a snake venom toxin) on glial cells and involves no pharmacokinetic analysis of cefadroxil. |
| popPK | Ryder_2026 | irrelevant | 4 | 2 | The paper is a narrative review and simulation study that cites previous PK data but does not report original quantitative PK parameters (CL, Vd, ka) for cefadroxil; specific values are referenced in external studies or figures not provided in the evidence. |
| popPK | Voulgarelis_2022 | irrelevant | 0 | 0 | The study focuses on tumour growth models for xenografts and does not involve cefadroxil or its pharmacokinetics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 10:43 UTC</sub>
