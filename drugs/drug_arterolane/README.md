<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Arterolane&quot;}]"></div>

# Arterolane

- **generic name:** Arterolane
- **ATC codes:** `P01BX02`
- **DrugBank:** [DB19027](https://go.drugbank.com/drugs/DB19027) · **PubChem:** not captured
- **molar mass:** 392.54 g/mol (C22H36N2O4) — DrugBank
- **groups:** investigational

## About

Arterolane is an antimalarial drug developed for the treatment of malaria. It is still classed as investigational and is not widely approved; it has been used mainly in combination therapy in India.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:40 | 2:29 | 0/0/0 | 0/1/0 | 0/0/1 | 128,549/2,300 | ollama / glm-5.3-flash | 7 | 5/1 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Gautam_2011_PCT](drugs/drug_arterolane/pd_Gautam_2011_PCT.md) | parasite clearance time ← arterolane · model not identified | — | Gautam A et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2011) | [10.1177/0091270010385578](https://doi.org/10.1177/0091270010385578) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Gautam_2011_PC_50](drugs/drug_arterolane/pd_Gautam_2011_PC_50.md) | 50% parasite clearance ← arterolane · model not identified | — | Gautam A et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2011) | [10.1177/0091270010385578](https://doi.org/10.1177/0091270010385578) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Gautam_2011_PC_90](drugs/drug_arterolane/pd_Gautam_2011_PC_90.md) | 90% parasite clearance ← arterolane · model not identified | — | Gautam A et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2011) | [10.1177/0091270010385578](https://doi.org/10.1177/0091270010385578) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Gautam_2011_recrudescence](drugs/drug_arterolane/pd_Gautam_2011_recrudescence.md) | recrudescence ← arterolane · model not identified | — | Gautam A et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2011) | [10.1177/0091270010385578](https://doi.org/10.1177/0091270010385578) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">other organism</span> | **P. falciparum K13** | `Q321` · EC50 | target | [Straimer_2017](drugs/drug_arterolane/pgx_Straimer_2017_P_falciparum_K13_Q321.md) | Straimer J et al., Plasmodium falciparum K13 Mutations Dif…, mBio (2017) | [10.1128/mBio.00172-17](https://doi.org/10.1128/mBio.00172-17) |

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

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adoke_2021 | irrelevant | 0 | 0 | This is a clinical trial of artefenomel/ferroquine for malaria; arterolane is not the subject drug and no arterolane PK parameters are reported. |
| popPK | Anantpadma_2019 | irrelevant | 0 | 0 | This is an in vitro Ebola antiviral screening study; arterolane is only a tested compound (IC50 4.53 μM), with no PK parameters reported. |
| popPK | McCarthy_2016 | irrelevant | 0 | 0 | The paper reports PK parameters for artefenomel (OZ439), not arterolane; arterolane is only mentioned as a comparator with a cited half-life, and no arterolane parameter values are present. |
| popPK | Wamae_2022 | irrelevant | 0 | 0 | This is a parasite (P. falciparum) clearance/genotyping study using arterolane regimens; no arterolane pharmacokinetic disposition parameters (CL, V, ka, PK model) are reported. |
| popPK | Wattanakul_2021 | irrelevant | 0 | 0 | The paper models piperaquine (not arterolane) PK/PD; arterolane is only mentioned as a possible combination partner, and no arterolane parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
