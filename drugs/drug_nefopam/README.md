<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;nefopam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nefopam_Djerada2014_reference&quot;,&quot;label&quot;:&quot;Djerada_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nefopam/Nefopam_Djerada2014_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nefopam

- **generic name:** nefopam
- **ATC codes:** `N02BG06`
- **DrugBank:** [DB12293](https://go.drugbank.com/drugs/DB12293) · **PubChem:** [CID 4450](https://pubchem.ncbi.nlm.nih.gov/compound/4450)
- **molar mass:** 253.345 g/mol (C17H19NO) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Nefopam is a non-opioid painkiller used to relieve pain. It is approved in some countries and used mainly in Europe and parts of Asia, but is not available everywhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q599052](https://www.wikidata.org/wiki/Q599052) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nefopam | parent | 253.345 | C17H19NO | DrugBank | [4450](https://pubchem.ncbi.nlm.nih.gov/compound/4450) | Podranski_2012 |
| desmethyl-nefopam | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:37 | 0:20 | 1/2/0 | 0/0/0 | 0/0/0 | 30,911/2,017 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.375). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Djerada_2014_reference](drugs/drug_nefopam/Nefopam_Djerada2014_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Djerada Z et al., Population pharmacokinetics of nefopam…, British journal of clinical… (2014) | [10.1111/bcp.12291](https://doi.org/10.1111/bcp.12291) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Mimoz_2010_reference](drugs/drug_nefopam/Nefopam_Mimoz2010_reference.md) | — | parent + metabolite (no model) | 0 | Mimoz O et al., Nefopam pharmacokinetics in patients wi…, Anesthesia and analgesia (2010) | [10.1213/ANE.0b013e3181f33488](https://doi.org/10.1213/ANE.0b013e3181f33488) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.556). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Podranski_2012_reference](drugs/drug_nefopam/Nefopam_Podranski2012_reference.md) | — | 1-compartment (no model) | 1 | Podranski T et al., Compartmental pharmacokinetics of nefop…, British journal of anaesthe… (2012) | [10.1093/bja/aer517](https://doi.org/10.1093/bja/aer517) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Djerada_2014.pdf` | Djerada Z et al., Population pharmacokinetics of nefopam…, British journal of clinical… (2014) | popPK | 10 | [10.1111/bcp.12291](https://doi.org/10.1111/bcp.12291) | [24252055](https://pubmed.ncbi.nlm.nih.gov/24252055) | The abstract explicitly reports the numeric population estimates for clearance, volume of distribution, intercompartmental clearance, and peripheral volume for nefopam in a two-compartment model. |
| `Mimoz_2010.pdf` | Mimoz O et al., Nefopam pharmacokinetics in patients wi…, Anesthesia and analgesia (2010) | popPK | 10 | [10.1213/ANE.0b013e3181f33488](https://doi.org/10.1213/ANE.0b013e3181f33488) | [20971961](https://pubmed.ncbi.nlm.nih.gov/20971961) | The study reports quantitative PK parameters (clearance, volume of distribution) for nefopam in humans, with specific values provided in the abstract for both healthy volunteers and ESRD patients. |
| `Mittur_2018.pdf` | Mittur A, A Simultaneous Mixed-Effects Pharmacoki…, European journal of drug me… (2018) | popPK | 10 | [10.1007/s13318-017-0457-3](https://doi.org/10.1007/s13318-017-0457-3) | [29305813](https://pubmed.ncbi.nlm.nih.gov/29305813) | The study reports a population PK model for nefopam, but no quantitative parameter values (CL, V, etc.) are provided in the extracted evidence. |

<sub>queue written 2026-10-07T06:36:46.293885+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Mittur_2018 | relevant | 10 | 0 | The study reports a population PK model for nefopam, but no quantitative parameter values (CL, V, etc.) are provided in the extracted evidence. |
| popPK | Pérez-Gómez_2006 | irrelevant | 0 | 0 | The study is an in vitro neurotoxicity experiment on rat neurons where nefopam is used only as a sodium channel antagonist control, not as the subject drug for pharmacokinetic analysis. |
| PD | Pérez-Gómez_2006 | not_relevant | 0 | 0 | The paper reports the neurotoxicity of yessotoxin (YTX) and mentions nefopam only as an ineffective antagonist in a qualitative context, providing no PD parameters or exposure-response data for nefopam. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:36 UTC</sub>
