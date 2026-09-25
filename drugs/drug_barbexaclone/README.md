<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;barbexaclone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Barbexaclone_Iven1983_reference&quot;,&quot;label&quot;:&quot;Iven_1983_reference&quot;,&quot;href&quot;:&quot;drugs/drug_barbexaclone/Barbexaclone_Iven1983_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# barbexaclone

- **generic name:** barbexaclone
- **ATC codes:** `N03AA04`
- **DrugBank:** [DB09001](https://go.drugbank.com/drugs/DB09001)
- **groups:** experimental

## About

**Description.** Barbexaclone, a salt compound of propylhexedrine and phenobarbital, is a potent antiepileptic. By weight, barbexaclone is 40% propylhexedrine and 60% phenobarbital.  While barbexaclone has sedative properties, propylhexedrine has psychostimulant properties intended to offset these sedative effects. Pharmacokinetic studies have demonstrated that the pharmacokinetics of phenobarbital given as barbexaclone are not affected by propylhexedrine. Several reports from Spanish and Italian literature suggest that barbexaclone is at least as effective as phenobarbital in adults and children, while being better tolerated and having less sedative properties.  These reports were conducted in a small series of patients in the 1970s and 1980s, and have yet to be confirmed by larger controlled trials.  Despite the lack of controlled trials, barbexaclone was used widely in Turkey until it was discontinued in 2009. 

Barbexaclone exists in 25mg and 100mg tablets. 100mg of barbexaclone is equivalent to 60mg of phenobarbital. With this difference in potency in mind, other pharmacokinetic considerations such as dose titration, daily dosing, and optimal plasma concentration can be considered the same as for the equivalent amount of phenobarbital. 

There has been a case of barbexaclone abuse due to the amphetamine like properties of propylhexedrine, although the comparative abuse potential is much lower than amphetamine.

**Indication.** Created for the treatment for epilepsy, with the intent of creating an antiepileptic with less sedative properties than phenobarbital.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 09:22 | 0:23 | 0/1/0 | 0/0/0 | 0/0/0 | 8,252/835 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Iven_1983_reference](drugs/drug_barbexaclone/Barbexaclone_Iven1983_reference.md) | Iven H et al., Pharmacokinetics of phenobarbital and p…, Naunyn-Schmiedeberg's archi… (1983) | [10.1007/BF00497022](https://doi.org/10.1007/BF00497022) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=barbexaclone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | brain | <sub>“…er 4 minutes, and propylhexedrine was seen to penetrate the blood brain barrier rapidly. B…”</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1 matched, 1 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Iven_1983.pdf` | Iven H et al., Pharmacokinetics of phenobarbital and p…, Naunyn-Schmiedeberg's archi… (1983) | popPK | 9 | [10.1007/BF00497022](https://doi.org/10.1007/BF00497022) | [6139756](https://pubmed.ncbi.nlm.nih.gov/6139756) | The study reports quantitative pharmacokinetic parameters (half-lives, volumes of distribution, bioavailability) for barbexaclone's active metabolites (phenobarbital and propylhexedrine) in mice, with all numeric values explicitly present in the text. |

<sub>queue written 2026-09-21T09:21:43.912788+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-21 09:21 UTC</sub>
