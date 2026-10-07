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
| <span class="pk-badge pk-badge--red">rejected</span> | [Gautam_2011_PCT](drugs/drug_arterolane/pd_Gautam_2011_PCT.md) | parasite clearance time ← arterolane · model not identified | — | Gautam A et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2011) | [10.1177/0091270010385578](https://doi.org/10.1177/0091270010385578) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Gautam_2011_PC_50](drugs/drug_arterolane/pd_Gautam_2011_PC_50.md) | 50% parasite clearance ← arterolane · model not identified | — | Gautam A et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2011) | [10.1177/0091270010385578](https://doi.org/10.1177/0091270010385578) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Gautam_2011_PC_90](drugs/drug_arterolane/pd_Gautam_2011_PC_90.md) | 90% parasite clearance ← arterolane · model not identified | — | Gautam A et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2011) | [10.1177/0091270010385578](https://doi.org/10.1177/0091270010385578) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Gautam_2011_recrudescence](drugs/drug_arterolane/pd_Gautam_2011_recrudescence.md) | recrudescence ← arterolane · model not identified | — | Gautam A et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2011) | [10.1177/0091270010385578](https://doi.org/10.1177/0091270010385578) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **P. falciparum K13** | `Q321` · EC50 | target | [Straimer_2017](drugs/drug_arterolane/pgx_Straimer_2017_P_falciparum_K13_Q321.md) | Straimer J et al., Plasmodium falciparum K13 Mutations Dif…, mBio (2017) | [10.1128/mBio.00172-17](https://doi.org/10.1128/mBio.00172-17) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=arterolane) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: P. FALCIPARUM K13 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
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
