<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;piracetam&quot;}]"></div>

# piracetam

- **generic name:** piracetam
- **ATC codes:** `N06BX03`
- **DrugBank:** [DB09210](https://go.drugbank.com/drugs/DB09210) · **PubChem:** not captured
- **molar mass:** 142.1558 g/mol (C6H10N2O2) — DrugBank
- **groups:** approved, withdrawn

## About

Piracetam is a nootropic drug used for conditions affecting the brain, such as cognitive and neurological disorders. It is approved and used in several countries, but has been withdrawn in some markets, including the United States.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410069](https://www.wikidata.org/wiki/Q410069) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Bravo-Martínez_2012_CaV2_2_inhibition](drugs/drug_piracetam/pd_Bravo_Mart_nez_2012_CaV2_2_inhibition.md) | CaV2.2 channel current inhibition (percent of inhibition) ← piracetam · direct sigmoid Emax (Hill) effect | — | Bravo-Martínez J et al., A novel CaV2.2 channel inhibition by pi…, Experimental biology and me… (2012) | [10.1258/ebm.2012.012128](https://doi.org/10.1258/ebm.2012.012128) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chayrov_2022_cell_viability](drugs/drug_piracetam/pd_Chayrov_2022_cell_viability.md) | Cell viability of copper-injured APPswe cells ← piracetam-memantine · stimulation effect | — | Chayrov R et al., Synthesis, Neuroprotective Effect and P…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15091108](https://doi.org/10.3390/ph15091108) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=piracetam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | brain | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:38 | 0:26 | 0/0/0 | 2/0/0 | 0/0/0 | 59,080/1,413 | ollama / glm-5.3-flash | 3 | 1/2 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barkat_2014.pdf` | Barkat K et al., Development of a simple chromatographic…, Drug research (2014) | popPK | 8 | [10.1055/s-0033-1363248](https://doi.org/10.1055/s-0033-1363248) | [24443305](https://pubmed.ncbi.nlm.nih.gov/24443305) | Human single-dose PK study with numeric non-compartmental parameters (t1/2, Ke, Vd, AUC, Cmax) reported directly in the abstract. |
| `Abikhalil_1986.pdf` | Abikhalil F et al., A new algorithm for computing the param…, European journal of drug me… (1986) | popPK | 5 | [10.1007/BF03189775](https://doi.org/10.1007/BF03189775) | [3087752](https://pubmed.ncbi.nlm.nih.gov/3087752) | Piracetam PK used to test a fitting algorithm, but no numeric parameter values are given in the evidence. |

<sub>queue written 2026-10-07T00:38:36.722615+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abikhalil_1986 | relevant | 5 | 1 | Piracetam PK used to test a fitting algorithm, but no numeric parameter values are given in the evidence. |
| popPK | Bravo-Martínez_2012 | irrelevant | 0 | 0 | In-vitro electrophysiology study of piracetam's effect on calcium channels; no PK disposition parameters reported. |
| popPK | Chayrov_2022 | irrelevant | 0 | 0 | This is a synthesis/neuroprotection/solubility study of memantine conjugates; piracetam is only a chemical moiety, with no PK parameters reported. |
| popPK | Inozemtsev_2007 | irrelevant | 0 | 0 | Behavioral pharmacology study in rats; piracetam is a test drug with no PK parameters reported. |
| popPK | Kaneko_1991 | irrelevant | 0 | 0 | In-vitro pharmacology study of NMDA channel effects; piracetam shows no effect and no PK parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
