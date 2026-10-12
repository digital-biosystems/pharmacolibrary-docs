<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefamandole&quot;}]"></div>

# cefamandole

- **generic name:** cefamandole
- **ATC codes:** `J01DC03`
- **DrugBank:** [DB01326](https://go.drugbank.com/drugs/DB01326) · **PubChem:** [CID 456255](https://pubchem.ncbi.nlm.nih.gov/compound/456255)
- **molar mass:** 462.503 g/mol (C18H18N6O5S2) — DrugBank
- **groups:** approved, withdrawn

## About

Cefamandole is a second-generation cephalosporin antibiotic that was used to treat bacterial infections such as staphylococcal infections, urinary tract infections, respiratory infections, pneumonia, and bone infections. It has been withdrawn and is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2601530](https://www.wikidata.org/wiki/Q2601530) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefamandole | parent | 462.503 | C18H18N6O5S2 | DrugBank | [456255](https://pubchem.ncbi.nlm.nih.gov/compound/456255) | Campillo_1979, Nielsen_1979 |
| cefamandole nafate | metabolite | 490.509 | C19H18N6O6S2 | PubChem | [5284527](https://pubchem.ncbi.nlm.nih.gov/compound/5284527) | Nielsen_1979 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:49 | 2:02 | 0/3/0 | 0/0/0 | 0/0/0 | 99,271/6,105 | einfracz / qwen3.8-27b | 3 | 3/0 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Campillo_1979_reference](drugs/drug_cefamandole/Cefamandole_Campillo1979_reference.md) | — | 2-compartment (no model) | 8 | Campillo JA et al., Pharmacokinetics of cefamandole in pati…, International journal of cl… (1979) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Nielsen_1979_disappearance_of_cn](drugs/drug_cefamandole/Cefamandole_Nielsen1979_disappearance_of_cn.md) | — | general linear (no model) | 2 | Nielsen RL et al., Hydrolysis of cefamandole nafate in dia…, Antimicrobial agents and ch… (1979) | [10.1128/AAC.16.5.683](https://doi.org/10.1128/AAC.16.5.683) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Nielsen_1979_rate_constant](drugs/drug_cefamandole/Cefamandole_Nielsen1979_rate_constant.md) | — | general linear (no model) | 2 | Nielsen RL et al., Hydrolysis of cefamandole nafate in dia…, Antimicrobial agents and ch… (1979) | [10.1128/AAC.16.5.683](https://doi.org/10.1128/AAC.16.5.683) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Campillo_1979.pdf` | Campillo JA et al., Pharmacokinetics of cefamandole in pati…, International journal of cl… (1979) | popPK | 10 | not captured | [500264](https://pubmed.ncbi.nlm.nih.gov/500264) | The paper provides quantitative two-compartment PK parameters (Vc, Vp, Vdss, rate constants) for cefamandole in human patients. |
| `Klimova_1982.pdf` | Klimova VS et al., [Pharmacokinetics of cefamandole in rab…, Antibiotiki (1982) | popPK | 10 | not captured | [7165292](https://pubmed.ncbi.nlm.nih.gov/7165292) | The paper reports quantitative compartmental pharmacokinetic parameters (volume, clearance constants, half-life) for cefamandole in rabbits. |
| `Wang_2008.pdf` | Wang Y et al., Semiparametric mixed-effects analysis o…, Journal of pharmacokinetics… (2008) | popPK | 10 | [10.1007/s10928-008-9096-2](https://doi.org/10.1007/s10928-008-9096-2) | [18781382](https://pubmed.ncbi.nlm.nih.gov/18781382) | The paper describes a population PK/PD modeling method applied to cefamandole data, but the specific numeric parameter values are not present in the provided evidence. |
| `Yeh_2001.pdf` | Yeh PH et al., Determination of unbound cefamandole in…, Biomedical chromatography :… (2001) | popPK | 9 | [10.1002/bmc.20](https://doi.org/10.1002/bmc.20) | [11180295](https://pubmed.ncbi.nlm.nih.gov/11180295) | The study reports quantitative PK data for cefamandole in rats, including a specific half-life value and mention of a two-compartmental model fit, but full parameter sets (CL, V) are not explicitly listed in the text provided. |
| `Veng-Pedersen_1988.pdf` | Veng-Pedersen P, Linear and nonlinear system approaches…, Journal of pharmacokinetics… (1988) | popPK | 6 | [10.1007/BF01062384](https://doi.org/10.1007/BF01062384) | [3199318](https://pubmed.ncbi.nlm.nih.gov/3199318) | The study demonstrates PK methods on cefamandole in humans, but the specific numeric parameter values are not included in the provided evidence. |

<sub>queue written 2026-10-07T10:48:21.130882+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Mattie_1990 | irrelevant | 2 | 0 | This is a pharmacodynamic study in mice comparing antibacterial effects, and no quantitative pharmacokinetic parameters (e.g., CL, V, t1/2) for cefamandole are provided in the evidence. |
| popPK | Murakawa_1980 | irrelevant | 2 | 0 | Cefamandole is used only as a reference/comparator drug in a study of ceftizoxime, and specific pharmacokinetic parameters for cefamandole are not reported. |
| popPK | Veng-Pedersen_1988 | relevant | 6 | 0 | The study demonstrates PK methods on cefamandole in humans, but the specific numeric parameter values are not included in the provided evidence. |
| popPK | Wang_2008 | relevant | 10 | 0 | The paper describes a population PK/PD modeling method applied to cefamandole data, but the specific numeric parameter values are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:48 UTC</sub>
