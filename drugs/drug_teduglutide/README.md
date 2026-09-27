<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;teduglutide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Teduglutide_Marier2010_reference&quot;,&quot;label&quot;:&quot;Marier_2010_reference&quot;,&quot;href&quot;:&quot;drugs/drug_teduglutide/Teduglutide_Marier2010_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# teduglutide

- **generic name:** teduglutide
- **ATC codes:** `A16AX08`
- **DrugBank:** [DB08900](https://go.drugbank.com/drugs/DB08900)
- **groups:** approved, investigational

## About

**Description.** Teduglutide is a glucagon-like peptide-2 (GLP-2) analogue. It is made up of 33 amino acids and is manufactured using a strain of Escherichia coli modified by recombinant DNA technology. Teduglutide differs from GLP-2 by one amino acid (alanine is substituted by glycine). The significance of this substitution is that teduglutide is longer acting than endogenous GLP-2 as it is more resistant to proteolysis from dipeptidyl peptidase-4. FDA approved on December 21, 2012.

**Indication.** Teduglutide is indicated for the treatment of adults and pediatric patients 1 year of age and older with Short Bowel Syndrome (SBS) who are dependent on parenteral support.[L39870]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 09:38 | 3:46 | 0/0/1 | 0/0/0 | 0/0/0 | 16,245/4,918 | openai / gpt-5.6-luna | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Marier_2010_reference](drugs/drug_teduglutide/Teduglutide_Marier2010_reference.md) | 1-compartment (no model) | 1 | Marier JF et al., Population pharmacokinetics of teduglut…, Journal of clinical pharmac… (2010) | [10.1177/0091270009342252](https://doi.org/10.1177/0091270009342252) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=teduglutide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…Urine…”</sub> | prose |

<sub>Actors without a tissue in the table: GLP2R (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Marier_2010.pdf` | Marier JF et al., Population pharmacokinetics of teduglut…, Journal of clinical pharmac… (2010) | popPK | 10 | [10.1177/0091270009342252](https://doi.org/10.1177/0091270009342252) | [19773525](https://pubmed.ncbi.nlm.nih.gov/19773525) | The evidence reports a teduglutide population-PK model with numeric CL/F and weight-dependent half-life values. |
| `Roepcke_2014.pdf` | Roepcke S et al., Utility of a population pharmacokinetic…, International journal of cl… (2014) | popPK | 10 | [10.5414/CP201942](https://doi.org/10.5414/CP201942) | [25066226](https://pubmed.ncbi.nlm.nih.gov/25066226) | This is a teduglutide population-PK study, but no numeric disposition parameters are provided in the evidence. |
| `Marier_2021.pdf` | Marier JF et al., Population pharmacokinetics and exposur…, Clinical and translational… (2021) | pd | 5 | [10.1111/cts.13117](https://doi.org/10.1111/cts.13117) | [34402197](https://www.ncbi.nlm.nih.gov/pubmed/34402197) | metadata signals extractable PD data (exposure-response) |

<sub>queue written 2026-09-27T09:37:50.431696+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alters_2012 | not_relevant | 0 | 9 | The paper reports engineered teduglutide/GLP2-2G-XTEN pharmacokinetics and pharmacodynamics across animal species, but no patient gene variant, genotype, or phenotype effect on a PK or PD parameter. |
| PGx | Gadgaard_2023 | not_relevant | 0 | 0 | The paper studies chemically lipidated GLP-2 analogs, not gene variants, genotypes, or phenotypes affecting teduglutide PK or PD parameters. |
| PGx | Gu_2017 | not_relevant | 0 | 0 | The paper compares engineered GLP-2 analogues and reports pharmacokinetic and therapeutic differences, but does not evaluate any gene variant, genotype, or phenotype effect on teduglutide PK or PD. |
| popPK | Marier_2021 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| popPK | Micic_2024 | irrelevant | 0 | 0 | This post hoc efficacy analysis reports liver chemistry changes, not teduglutide pharmacokinetic disposition parameters or numeric PK values. |
| popPK | Roepcke_2014 | relevant | 10 | 0 | This is a teduglutide population-PK study, but no numeric disposition parameters are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 09:38 UTC</sub>
