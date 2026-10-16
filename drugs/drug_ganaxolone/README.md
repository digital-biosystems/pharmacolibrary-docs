<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;ganaxolone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ganaxolone_Zolkowska2018_reference&quot;,&quot;label&quot;:&quot;Zolkowska_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ganaxolone/Ganaxolone_Zolkowska2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ganaxolone

- **generic name:** ganaxolone
- **ATC codes:** `N03AX27`
- **DrugBank:** [DB05087](https://go.drugbank.com/drugs/DB05087) · **PubChem:** [CID 6918305](https://pubchem.ncbi.nlm.nih.gov/compound/6918305)
- **molar mass:** 332.528 g/mol (C22H36O2) — DrugBank
- **groups:** approved, investigational

## About

Ganaxolone is an antiepileptic medicine used to treat epileptic syndromes, including infantile spasms. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3758034](https://www.wikidata.org/wiki/Q3758034) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ganaxolone | parent | 332.528 | C22H36O2 | DrugBank | [6918305](https://pubchem.ncbi.nlm.nih.gov/compound/6918305) | Zolkowska_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:11 | 1:39 | 1/0/0 | 1/0/0 | 0/0/0 | 103,885/6,828 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Zolkowska_2018_reference](drugs/drug_ganaxolone/Ganaxolone_Zolkowska2018_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Zolkowska D et al., Intramuscular allopregnanolone and gana…, Epilepsia 59 Suppl 2(Suppl… (2018) | [10.1111/epi.13999](https://doi.org/10.1111/epi.13999) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span> | [Pinna_2014_aggressive_behavior](drugs/drug_ganaxolone/pd_Pinna_2014_aggressive_behavior.md) | aggressive behavior ← ganaxolone · inhibition effect | — | Pinna G et al., Ganaxolone improves behavioral deficits…, Frontiers in cellular neuro… (2014) | [10.3389/fncel.2014.00256](https://doi.org/10.3389/fncel.2014.00256) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span> | [Pinna_2014_anxiety_like_behavior_ratio_of_open_to_closed_arm_total_time](drugs/drug_ganaxolone/pd_Pinna_2014_anxiety_like_behavior_ratio_of_open_to_closed_arm.md) | anxiety-like behavior (ratio of open to closed arm total time) ← ganaxolone · stimulation effect | — | Pinna G et al., Ganaxolone improves behavioral deficits…, Frontiers in cellular neuro… (2014) | [10.3389/fncel.2014.00256](https://doi.org/10.3389/fncel.2014.00256) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ganaxolone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zolkowska_2018.pdf` | Zolkowska D et al., Intramuscular allopregnanolone and gana…, Epilepsia 59 Suppl 2(Suppl… (2018) | popPK | 10 | [10.1111/epi.13999](https://doi.org/10.1111/epi.13999) | [29453777](https://pubmed.ncbi.nlm.nih.gov/29453777) | The paper reports quantitative two-compartment pharmacokinetic parameters (Vd, CL, t1/2, F) for ganaxolone in the abstract. |
| `Carter_1997.pdf` | Carter RB et al., Characterization of the anticonvulsant…, The Journal of pharmacology… (1997) | pd | 4 | not captured | [9067315](https://www.ncbi.nlm.nih.gov/pubmed/9067315) | metadata signals extractable PD data (IC50) |
| `Devenish_2021.pdf` | Devenish SO et al., The anticonvulsant zonisamide positivel…, Neuropharmacology (2021) | pd | 4 | [10.1016/j.neuropharm.2020.108371](https://doi.org/10.1016/j.neuropharm.2020.108371) | [33122032](https://www.ncbi.nlm.nih.gov/pubmed/33122032) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-14T19:10:34.660845+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carter_1997 | irrelevant | 0 | 0 | The study reports pharmacodynamic and receptor-binding data (IC50, EC50, ED50) but contains no quantitative pharmacokinetic disposition parameters for ganaxolone. |
| popPK | Devenish_2021 | irrelevant | 0 | 0 | The study focuses on the in-vitro pharmacological modulation of glycine receptors by zonisamide, with ganaxolone mentioned only as a comparator agent without any pharmacokinetic data. |
| PGx | Martins_2026 | not_relevant | 0 | 0 | The paper is a general review of the antiseizure medication pipeline and does not report specific pharmacogenomic data (gene-drug interactions) for ganaxolone. |
| popPK | Nik_2017 | irrelevant | 0 | 0 | The study is an in vitro receptor binding/functional assay for GABA receptors and does not report pharmacokinetic disposition parameters (CL, V, etc.) for ganaxolone. |
| PGx | Nipper_2019 | not_relevant | 4 | 5 | The study examines genotype differences in pharmacodynamic response (anticonvulsant efficacy) during ethanol withdrawal, which is a context-specific disease state interaction rather than a baseline pharmacogenomic effect on a specific PK/PD parameter. |
| popPK | Olson_2024 | irrelevant | 0 | 0 | The paper reports clinical efficacy (seizure frequency) and safety outcomes for ganaxolone, but contains no pharmacokinetic parameters or disposition data. |
| popPK | Pinna_2014 | irrelevant | 0 | 0 | This is a behavioral pharmacology study in mice that reports dose-response and EC50 values for behavioral effects, but does not report any pharmacokinetic parameters (CL, V, etc.) for ganaxolone. |
| PGx | Tobiasz_2025 | not_relevant | 0 | 0 | The paper is a review of treatment approaches for PCDH19-related epilepsy and mentions ganaxolone, but does not report any pharmacogenomic effect on its PK or PD parameters. |
| PGx | Zimmern_2022 | not_relevant | 0 | 0 | The paper is a general review of genetic epilepsies that mentions ganaxolone efficacy but does not report specific pharmacokinetic or pharmacodynamic parameters modulated by gene variants. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:10 UTC</sub>
