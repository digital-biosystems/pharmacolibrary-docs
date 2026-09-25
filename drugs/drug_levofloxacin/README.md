<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;levofloxacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levofloxacin_Setiawan2022_mean&quot;,&quot;label&quot;:&quot;Setiawan_2022_mean&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_mean.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levofloxacin_Setiawan2022_median&quot;,&quot;label&quot;:&quot;Setiawan_2022_median&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_median.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levofloxacin_He2024_reference&quot;,&quot;label&quot;:&quot;He_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_levofloxacin/Levofloxacin_He2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# levofloxacin

- **generic name:** levofloxacin
- **ATC codes:** `A02BD10`, `J01MA12`, `J01RA05`, `J04AM12`, `S01AE05`
- **DrugBank:** [DB01137](https://go.drugbank.com/drugs/DB01137)
- **groups:** approved, investigational

## About

**Description.** Levofloxacin is a fluoroquinolone antibiotic and the optical S-(-) isomer of racemic [ofloxacin].[A190663] It reportedly carries 8 to 128-fold more activity against both gram-negative and gram-positive bacteria compared to R-(+)-ofloxacin[A190663] and remains stereochemically stable following administration (i.e. it does not invert to the inactive isomer).[L11638] Levofloxacin, along with other quinolones such as [gatifloxacin] and [moxifloxacin], is a member of the third generation of fluoroquinolones, colloquially referred to as the "respiratory quinolones" due to improved activity against gram-positive bacteria commonly implicated in respiratory infections.[A31453,A190756]

Levofloxacin was first approved by the FDA in 1996, and was approved in Canada and several South American countries soon after.[A190663]

**Indication.** In oral and intravenous formulations, levofloxacin is indicated in adults for the treatment of various infections caused by susceptible bacteria, including infections of the upper respiratory tract, lower respiratory tract, skin, skin structures, urinary tract, and prostate.[L11638,L11692] The oral formulation is also indicated in both adults and children 6 months of age and older for the post-exposure management of inhalational anthrax caused by _Bacillus anthracis_ and for the treatment and/or prophylaxis of plague caused by _Yersinia pestis_.[L11638]

In its ophthalmic formulation, levofloxacin is indicated for the treatment of bacterial conjunctivitis caused by susceptible organisms.[L11641] An inhalational solution available in Canada is indicated for the management of cystic fibrosis patients aged 18 years or older with chronic pulmonary _Pseudomonas aeruginosa_ infections.[L11689]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 06:02 | 0:37 | 2/0/1 | 0/0/0 | 0/0/0 | 19,631/498 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Setiawan_2022_mean](drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_mean.md) | Setiawan E et al., Population pharmacokinetics and dose op…, Scientific reports (2022) | [10.1038/s41598-022-12627-1](https://doi.org/10.1038/s41598-022-12627-1) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Setiawan_2022_median](drugs/drug_levofloxacin/Levofloxacin_Setiawan2022_median.md) | Setiawan E et al., Population pharmacokinetics and dose op…, Scientific reports (2022) | [10.1038/s41598-022-12627-1](https://doi.org/10.1038/s41598-022-12627-1) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [He_2024_reference](drugs/drug_levofloxacin/Levofloxacin_He2024_reference.md) | He YY et al., Population pharmacokinetics and dose op…, British journal of clinical… (2024) | [10.1111/bcp.16003](https://doi.org/10.1111/bcp.16003) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=levofloxacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `SLCO1A2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate, `SLC22A4` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `SLC22A4` inhibitor, `SLCO1A2` substrate | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | kidney | <sub>“…less than 5% of the administered dose was recovered in the urine as these metabolites, ind…”</sub> | prose |
| metabolism | liver | `CYP2C9` inhibitor, `SLC22A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>“…rine within 48 hours and less than 4% was eliminated in the feces within 72 hours.[L11638]…”</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC47A1` inhibitor/substrate, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: SLCO4C1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 237 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 2  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `He_2024.pdf` | He YY et al., Population pharmacokinetics and dose op…, British journal of clinical… (2024) | popPK | 10 | [10.1111/bcp.16003](https://doi.org/10.1111/bcp.16003) | [38317382](https://pubmed.ncbi.nlm.nih.gov/38317382) | The study is a population PK study for levofloxacin reporting a mean clearance value, but other key parameters like volume of distribution are not explicitly listed in the provided text. |

<sub>queue written 2026-09-18T06:01:37.688531+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 06:01 UTC</sub>
