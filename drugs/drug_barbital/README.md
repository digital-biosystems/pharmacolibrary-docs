<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;barbital&quot;}]"></div>

# barbital

- **generic name:** barbital
- **ATC codes:** `N05CA04`
- **DrugBank:** [DB01483](https://go.drugbank.com/drugs/DB01483) · **PubChem:** [CID 2294](https://pubchem.ncbi.nlm.nih.gov/compound/2294)
- **molar mass:** 184.1925 g/mol (C8H12N2O3) — DrugBank
- **groups:** experimental, illicit

## About

Barbital is a barbiturate that was used as a sedative and hypnotic drug to treat insomnia and anxiety. It is no longer in routine medical use; databases now classify it as an experimental and illicit substance rather than an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412409](https://www.wikidata.org/wiki/Q412409) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:42 | 0:22 | 0/0/0 | 0/2/0 | 0/0/0 | 19,211/1,663 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Nims_1994_BROD](drugs/drug_barbital/pd_Nims_1994_BROD.md) | benzyloxyresorufin O-dealkylation activity (CYP2B induction) ← barbital · direct Emax (saturable) effect | — | Nims RW et al., Comparative pharmacodynamics of hepatic…, The Journal of pharmacology… (1994) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Nims_1994_CYP2B1](drugs/drug_barbital/pd_Nims_1994_CYP2B1.md) | immunoreactive CYP2B1 protein ← barbital · direct Emax (saturable) effect | — | Nims RW et al., Comparative pharmacodynamics of hepatic…, The Journal of pharmacology… (1994) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Nims_1994_PROD](drugs/drug_barbital/pd_Nims_1994_PROD.md) | pentoxyresorufin O-dealkylation activity (CYP2B induction) ← barbital · direct Emax (saturable) effect | — | Nims RW et al., Comparative pharmacodynamics of hepatic…, The Journal of pharmacology… (1994) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [de_1993_86Rb_efflux](drugs/drug_barbital/pd_de_1993_86Rb_efflux.md) | agonist-stimulated efflux of 86Rb+ from nAchR-rich membrane vesicles ← barbital · direct sigmoid Emax (Hill) effect | — | de Armendi AJ et al., Barbiturate action is dependent on the…, Anesthesiology (1993) | [10.1097/00000542-199311000-00022](https://doi.org/10.1097/00000542-199311000-00022) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chou_1997.pdf` | Chou CH et al., Effect of altered tissue binding on the…, Journal of pharmaceutical s… (1997) | popPK | 6 | [10.1021/js960481d](https://doi.org/10.1021/js960481d) | [9383746](https://pubmed.ncbi.nlm.nih.gov/9383746) | Isolated perfused rat liver study with quantitative disposition parameters (mean transit time, volume of distribution, dispersion number) for barbital, with values present in the abstract. |

<sub>queue written 2026-10-06T19:42:19.725482+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bossert_2003 | irrelevant | 0 | 0 | Behavioral (conditioned place preference) study in rats with only doses, no PK disposition parameters. |
| popPK | Du_2012 | irrelevant | 0 | 0 | Barbital is only used as an anesthetic in a dog cardioprotection study; no PK parameters for barbital are reported. |
| popPK | Nims_1994 | irrelevant | 2 | 1 | This is a pharmacodynamics (CYP2B induction EC50) study in rats; no PK disposition parameters (CL, V, half-life) for barbital are reported. |
| popPK | Roca_1990 | irrelevant | 0 | 0 | In vitro receptor-binding study in chick neuronal cultures; barbital is a pharmacological agent, no PK disposition parameters reported. |
| popPK | Sato_1983_2 | irrelevant | 0 | 0 | The evidence contains no paper content at all, only GROBID boilerplate, so no PK parameters for barbital are present. |
| popPK | de_1993 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study with IC50 values, not a PK study reporting disposition parameters for barbital. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
