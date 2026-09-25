<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;flucytosine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flucytosine_Hope2006_reference&quot;,&quot;label&quot;:&quot;Hope_2006_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flucytosine/Flucytosine_Hope2006_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flucytosine_Stott2023_reference&quot;,&quot;label&quot;:&quot;Stott_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flucytosine/Flucytosine_Stott2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flucytosine_Stegman1999_reference&quot;,&quot;label&quot;:&quot;Stegman_1999_reference&quot;,&quot;href&quot;:&quot;drugs/drug_flucytosine/Flucytosine_Stegman1999_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# flucytosine

- **generic name:** flucytosine
- **ATC codes:** `D01AE21`, `J02AX01`
- **DrugBank:** [DB01099](https://go.drugbank.com/drugs/DB01099)
- **groups:** approved, investigational

## About

**Description.** A fluorinated cytosine analog that is used as an antifungal agent.

**Indication.** For the treatment (in combination with amphotericin B) of serious infections caused by susceptible strains of Candida (septicemia, endocarditis and urinary system infections) and/or Cryptococcus (meningitis and pulmonary infections).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 2/1/0 | 0/0/0 | 0/0/0 | not captured | not captured | 15 | 3/0 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Hope_2006_reference](drugs/drug_flucytosine/Flucytosine_Hope2006_reference.md) | Hope WW et al., Derivation of an in vivo drug exposure…, Antimicrobial agents and ch… (2006) | [10.1128/AAC.00369-06](https://doi.org/10.1128/AAC.00369-06) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Stott_2023_reference](drugs/drug_flucytosine/Flucytosine_Stott2023_reference.md) | Stott KE et al., Population pharmacokinetics and CSF pen…, The Journal of antimicrobia… (2023) | [10.1093/jac/dkad038](https://doi.org/10.1093/jac/dkad038) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Stegman_1999_reference](drugs/drug_flucytosine/Flucytosine_Stegman1999_reference.md) | Stegman LD et al., Noninvasive quantitation of cytosine de…, Proceedings of the National… (1999) | [10.1073/pnas.96.17.9821](https://doi.org/10.1073/pnas.96.17.9821) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=flucytosine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | small intestine | <sub>“…Flucytosine is deaminated, possibly by gut bacteria or by the fungal targets, to 5-fluorou…”</sub> | prose |
| excretion | bile duct | <sub>“…absorption. A small portion of the dose is excreted in the feces.…”</sub> | prose |
| excretion | kidney | <sub>“…Flucytosine is excreted via the kidneys by means of glomerular filtration without signific…”</sub> | prose |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation), DNMT1 (other).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vermes_2000.pdf` | Vermes A et al., Population pharmacokinetics of flucytos…, Therapeutic drug monitoring (2000) | popPK | 10 | [10.1097/00007691-200012000-00006](https://doi.org/10.1097/00007691-200012000-00006) | [11128235](https://pubmed.ncbi.nlm.nih.gov/11128235) | The study explicitly develops and validates population pharmacokinetic models for flucytosine in humans, providing quantitative clearance, volume of distribution, and intercompartmental rate constants with covariate equations. |

<sub>queue written 2026-07-18T04:17:00.739203+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kim_2020 | irrelevant | not captured | not captured | The paper explicitly states that no studies on flucytosine were identified and only develops a population PK model for voriconazole. |
| popPK | Li_2007 | irrelevant | not captured | not captured | The paper exclusively reports population pharmacokinetic parameters for meropenem and contains no data or mention of flucytosine. |
| popPK | Scott_2020 | irrelevant | not captured | not captured | This narrative review summarizes published flucytosine pharmacokinetic data from other studies rather than presenting original quantitative parameters or population models. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 12:02 UTC</sub>
