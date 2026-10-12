<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;moroxydine&quot;}]"></div>

# moroxydine

- **generic name:** moroxydine
- **ATC codes:** `J05AX01`
- **DrugBank:** [DB13597](https://go.drugbank.com/drugs/DB13597) · **PubChem:** not captured
- **molar mass:** 171.204 g/mol (C6H13N5O) — DrugBank
- **groups:** experimental

## About

Moroxydine is an antiviral agent that was developed for the treatment of viral infections. It is not an established medicine today; it is regarded as an experimental antiviral and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q781304](https://www.wikidata.org/wiki/Q781304) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| moroxydine | parent | 171.204 | C6H13N5O | DrugBank | — | Liu_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:19 | 0:27 | 0/1/0 | 2/0/0 | 0/0/0 | 23,815/2,188 | ollama / glm-5.3-flash | 3 | 0/0 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Liu_2016_reference](drugs/drug_moroxydine/Moroxydine_Liu2016_reference.md) | — | 1-compartment (no model) | 7 | Liu W et al., Pharmacokinetics and tissue residues of…, Journal of veterinary pharm… (2016) | [10.1111/jvp.12289](https://doi.org/10.1111/jvp.12289) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Barbieri_2018_CLIC1_current](drugs/drug_moroxydine/pd_Barbieri_2018_CLIC1_current.md) | CLIC1-mediated ion current ← moroxydine · inhibition effect | — | Barbieri F et al., Inhibition of Chloride Intracellular Ch…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00899](https://doi.org/10.3389/fphar.2018.00899) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Barbieri_2018_GSC_viability](drugs/drug_moroxydine/pd_Barbieri_2018_GSC_viability.md) | glioblastoma stem cell viability ← moroxydine · inhibition effect | — | Barbieri F et al., Inhibition of Chloride Intracellular Ch…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00899](https://doi.org/10.3389/fphar.2018.00899) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">in vitro</span> | [Lu_2012_PTP1B](drugs/drug_moroxydine/pd_Lu_2012_PTP1B.md) | Protein tyrosine phosphatase (PTP1B) inhibition ← biguanido-oxovanadium complex 3 (moroxydine ligand) · inhibition effect | — | Lu L et al., Exploration of biguanido-oxovanadium co…, Biometals : an internationa… (2012) | [10.1007/s10534-012-9548-4](https://doi.org/10.1007/s10534-012-9548-4) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2016.pdf` | Liu W et al., Pharmacokinetics and tissue residues of…, Journal of veterinary pharm… (2016) | popPK | 10 | [10.1111/jvp.12289](https://doi.org/10.1111/jvp.12289) | [26763124](https://pubmed.ncbi.nlm.nih.gov/26763124) | Original PK study of moroxydine in gibel carp with full numeric parameters (Vd, CL, t1/2, ka, AUC) present in the abstract. |

<sub>queue written 2026-10-07T17:19:15.332467+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kandeel_2021 | irrelevant | 0 | 0 | In silico docking/virtual screening study; moroxydine is only a docking hit with no PK parameters reported. |
| popPK | Riley_1990 | irrelevant | 0 | 0 | This is a review of chromatographic bioanalytical methods for antiviral drugs; moroxydine is only mentioned in a list, with no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:19 UTC</sub>
