<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;suxamethonium&quot;}]"></div>

# suxamethonium

- **generic name:** suxamethonium
- **ATC codes:** `M03AB01`
- **DrugBank:** [DB00202](https://go.drugbank.com/drugs/DB00202) · **PubChem:** [CID 5314](https://pubchem.ncbi.nlm.nih.gov/compound/5314)
- **molar mass:** 290.399 g/mol (C14H30N2O4) — DrugBank
- **groups:** approved, investigational

## About

Suxamethonium (succinylcholine) is a depolarizing neuromuscular blocking agent used as a muscle relaxant, for example to relax muscles during medical procedures. It remains an approved medicine and is included on the WHO list of essential medicines, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424378](https://www.wikidata.org/wiki/Q424378) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| suxamethonium (succinylcholine) | parent | 290.399 | C14H30N2O4 | DrugBank | [5314](https://pubchem.ncbi.nlm.nih.gov/compound/5314) | Roy_2002 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:53 | 0:11 | 0/1/1 | 2/0/0 | 0/0/0 | 23,088/2,518 | einfracz / qwen3.8-27b | 12 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Roy_2002_reference](drugs/drug_suxamethonium/Suxamethonium_Roy2002_reference.md) | — | 1-compartment (no model) | 1 | Roy JJ et al., Concentration-effect relation of succin…, Anesthesiology (2002) | [10.1097/00000542-200211000-00009](https://doi.org/10.1097/00000542-200211000-00009) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Torda_1997_2_reference](drugs/drug_suxamethonium/Suxamethonium_Torda1997v2_reference.md) | — | 1-compartment (no model) | 0 | Torda TA et al., Pharmacokinetics and pharmacodynamics o…, Anaesthesia and intensive c… (1997) | [10.1177/0310057X9702500312](https://doi.org/10.1177/0310057X9702500312) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Roy_2002_twitch](drugs/drug_suxamethonium/pd_Roy_2002_twitch.md) | force of contraction of the adductor pollicis ← succinylcholine · delayed effect through an effect compartment | — | Roy JJ et al., Concentration-effect relation of succin…, Anesthesiology (2002) | [10.1097/00000542-200211000-00009](https://doi.org/10.1097/00000542-200211000-00009) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Torda_1997_2_response_to_supramaximal_stimulation_of_the_ulnar_nerve](drugs/drug_suxamethonium/pd_Torda_1997_2_response_to_supramaximal_stimulation_of_the_uln.md) | response to supramaximal stimulation of the ulnar nerve ← suxamethonium · delayed effect through an effect compartment | — | Torda TA et al., Pharmacokinetics and pharmacodynamics o…, Anaesthesia and intensive c… (1997) | [10.1177/0310057X9702500312](https://doi.org/10.1177/0310057X9702500312) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=suxamethonium) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` substrate | DrugBank actor |
| metabolism | liver | `BCHE` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRM2 (target), CHRM3 (target), CHRNA10 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Roy_2002.pdf` | Roy JJ et al., Concentration-effect relation of succin…, Anesthesiology (2002) | popPK | 10 | [10.1097/00000542-200211000-00009](https://doi.org/10.1097/00000542-200211000-00009) | [12411790](https://pubmed.ncbi.nlm.nih.gov/12411790) | The study reports quantitative pharmacokinetic parameters (clearance, rate constants) for succinylcholine in human subjects with values explicitly stated in the text. |
| `Torda_1997_2.pdf` | Torda TA et al., Pharmacokinetics and pharmacodynamics o…, Anaesthesia and intensive c… (1997) | popPK | 9 | [10.1177/0310057X9702500312](https://doi.org/10.1177/0310057X9702500312) | [9209610](https://pubmed.ncbi.nlm.nih.gov/9209610) | The study reports quantitative pharmacokinetic parameters for suxamethonium, including mean half-life of elimination (47 s) and a single-compartment model, derived from patient data. |

<sub>queue written 2026-10-07T02:53:21.285167+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allahyary_2008_2 | irrelevant | 0 | 0 | The study evaluates the depth of anesthesia using auditory evoked potentials in patients undergoing cesarean sections, using suxamethonium only for induction without reporting any pharmacokinetic parameters for the drug. |
| popPK | Fragen_1983 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of drug interactions on the rat diaphragm and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for suxamethonium. |
| popPK | Okada_2015 | irrelevant | 0 | 0 | The study measures neuromuscular function (tugging force) in mice and does not report any pharmacokinetic parameters (CL, V, etc.) for suxamethonium. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:53 UTC</sub>
