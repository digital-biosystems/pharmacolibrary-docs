<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;avatrombopag&quot;}]"></div>

# avatrombopag

- **generic name:** avatrombopag
- **ATC codes:** `B02BX08`
- **DrugBank:** [DB11995](https://go.drugbank.com/drugs/DB11995) · **PubChem:** [CID 9852519](https://pubchem.ncbi.nlm.nih.gov/compound/9852519)
- **molar mass:** 649.65 g/mol (C29H34Cl2N6O3S2) — DrugBank
- **groups:** approved, investigational

## About

Avatrombopag is a medicine used to treat thrombocytopenia, a shortage of blood platelets. It is an approved drug and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27257213](https://www.wikidata.org/wiki/Q27257213) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| avatrombopag | parent | 649.65 | C29H34Cl2N6O3S2 | DrugBank | [9852519](https://pubchem.ncbi.nlm.nih.gov/compound/9852519) | Liu_2025_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 17:29 | 6:02 | 0/0/1 | 1/0/0 | 1/0/1 | 65,104/19,483 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C1_half_life_beta failed (ratio 0.6843)</sub><br><sub>route_to: `human_review`</sub> | [Liu_2025_2_reference](drugs/drug_avatrombopag/Avatrombopag_Liu2025v2_reference.md) | — | 1-compartment (no model) | 4 | Liu X et al., Investigation of the, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18060903](https://doi.org/10.3390/ph18060903) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Nomoto_2018_PLT](drugs/drug_avatrombopag/pd_Nomoto_2018_PLT.md) | platelet count ← avatrombopag · direct linear effect | — | Nomoto M et al., Population Pharmacokinetic/Pharmacodyna…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1267](https://doi.org/10.1002/jcph.1267) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Liu_2025_2](drugs/drug_avatrombopag/pgx_Liu_2025_2_CYP2C9_safety.md) | Liu X et al., Investigation of the, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18060903](https://doi.org/10.3390/ph18060903) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Liu_2025_2](drugs/drug_avatrombopag/pgx_Liu_2025_2_ABCB1_Q100.md) | Liu X et al., Investigation of the, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18060903](https://doi.org/10.3390/ph18060903) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nomoto_2018.pdf` | Nomoto M et al., Population Pharmacokinetic/Pharmacodyna…, Journal of clinical pharmac… (2018) | popPK | 10 | [10.1002/jcph.1267](https://doi.org/10.1002/jcph.1267) | [29905956](https://pubmed.ncbi.nlm.nih.gov/29905956) | The paper describes a population PK model for avatrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Nomoto_2018_2.pdf` | Nomoto M et al., Pharmacokinetic/pharmacodynamic drug-dr…, British journal of clinical… (2018) | popPK | 8 | [10.1111/bcp.13517](https://doi.org/10.1111/bcp.13517) | [29341245](https://pubmed.ncbi.nlm.nih.gov/29341245) | The study reports quantitative PK parameters (AUC ratios, half-life) for avatrombopag in a DDI study, but lacks full compartmental model parameters (CL, V) and specific geometric mean values for all groups. |
| `Liu_2025.pdf` | Liu X et al., Investigation of the ABCB1 Gene Polymor…, Pharmaceuticals (Basel, Swi… (2025) | pgx | 8 | [10.3390/ph18060903](https://doi.org/10.3390/ph18060903) | [40573298](https://www.ncbi.nlm.nih.gov/pubmed/40573298) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |

<sub>queue written 2026-10-05T17:23:29.643552+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ibrahim_2021 | not_relevant | 0 | 0 | The paper is an in silico study of ABCG2 inhibition and does not report pharmacogenomic effects on avatrombopag PK/PD parameters. |
| PD | Liu_2025_2 | not_relevant | 4 | 3 | The paper reports a population PK model and PK/PD simulations, but the provided text does not contain the specific numeric PD parameters (e.g., Emax, EC50, slope) or the underlying PD model structure required to derive an extractable exposure-response relationship; it only presents qualitative conclusions and simulated outcome values. |
| popPK | Nomoto_2018 | relevant | 10 | 0 | The paper describes a population PK model for avatrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Nomoto_2018 | not_relevant | 0 | 0 | The paper analyzes population PK/PD factors like ethnicity, weight, and liver disease, but does not report effects of specific gene variants or genotypes on avatrombopag parameters. |
| PD | Nomoto_2018_2 | not_relevant | 3 | 2 | The paper reports qualitative changes in maximum platelet count (PD) relative to PK changes (AUC) for drug-drug interactions, but does not provide a concentration-effect curve, Emax/EC50 parameters, or a formal PK/PD model fit. |
| PGx | Nomoto_2018_2 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (DDIs) involving CYP inhibitors/inducers, not pharmacogenomic effects based on genetic variants or genotypes. |
| PGx | Nomoto_2018_3 | not_relevant | 4 | 2 | The paper reports an association between CYP2C9 polymorphisms and increased PK variability, but does not provide fitted effect sizes or demonstrate a clinically important change in PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 17:23 UTC</sub>
