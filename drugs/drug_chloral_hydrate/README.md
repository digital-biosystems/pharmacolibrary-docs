<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;chloral hydrate&quot;}]"></div>

# chloral hydrate

- **generic name:** chloral hydrate
- **ATC codes:** `N05CC01`
- **DrugBank:** [DB01563](https://go.drugbank.com/drugs/DB01563) · **PubChem:** [CID 2707](https://pubchem.ncbi.nlm.nih.gov/compound/2707)
- **molar mass:** 165.403 g/mol (C2H3Cl3O2) — DrugBank
- **groups:** approved, illicit, vet_approved

## About

Chloral hydrate is a sedative-hypnotic drug that has been used to treat agitation in dementia and to induce sleep. It remains an approved medicine, is also approved for veterinary use, and is sometimes misused as an illicit drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412340](https://www.wikidata.org/wiki/Q412340) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:55 | 7:29 | 0/0/0 | 1/1/0 | 0/0/0 | 351,501/5,415 | ollama / glm-5.3-flash | 12 | 5/6 | 12/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Fischer_2000_Ca2_i](drugs/drug_chloral_hydrate/pd_Fischer_2000_Ca2_i.md) | AMPA-induced rise of intracellular Ca2+ concentration ([Ca2+]i) inhibited by chloral hydrate ← chloral hydrate · direct Emax (saturable) effect | — | Fischer W et al., Inhibition by chloral hydrate and trich…, European journal of pharmac… (2000) | [10.1016/s0014-2999(00)00160-6](https://doi.org/10.1016/s0014-2999(00)00160-6) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Poon_2002_ALDH](drugs/drug_chloral_hydrate/pd_Poon_2002_ALDH.md) | liver aldehyde dehydrogenase (ALDH) activity ← chloral hydrate · inhibition effect | — | Poon R et al., Subchronic toxicity of chloral hydrate…, Journal of applied toxicolo… (2002) | [10.1002/jat.843](https://doi.org/10.1002/jat.843) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=chloral_hydrate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | placenta | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 97 matched, 59 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amano_1996 | irrelevant | 0 | 0 | Chloral hydrate is used only as anesthesia in a rat electrophysiology study of methamphetamine; no PK parameters for chloral hydrate are reported. |
| popPK | Beretta_2008 | irrelevant | 0 | 0 | Chloral hydrate is only used as an ALDH inhibitor in an in-vitro nitroglycerin biochemistry study; no PK parameters for chloral hydrate are reported. |
| popPK | Branson_2011 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| popPK | Ciscato_2025 | irrelevant | 0 | 0 | This is a chemogenetic (CATCH) methods protocol; chloral hydrate appears only as a reagent/anesthetic, with no PK parameters. |
| popPK | Downie_1995 | irrelevant | 0 | 0 | In-vitro electrophysiology/binding study of trichloroethanol on 5-HT3 receptors; no PK disposition parameters for chloral hydrate. |
| popPK | Fernández-Pastor_2017 | irrelevant | 0 | 0 | no_text gate: only 156 chars of text extracted (&lt; 400) |
| popPK | Fischer_2000 | irrelevant | 0 | 0 | In-vitro mechanistic study of Ca2+ influx inhibition in rat cultured neurons; no PK disposition parameters for chloral hydrate. |
| popPK | Garrett_1998 | irrelevant | 0 | 0 | In-vitro mechanistic study of alpha-chloralose on GABAA receptors; no PK parameters for chloral hydrate. |
| popPK | Grobaski_1997 | irrelevant | 0 | 0 | Chloral hydrate is only an in-vitro electrophysiology tool; no PK parameters for it are reported. |
| PGx | Guo_2008 | not_relevant | 1 | 3 | Chloral hydrate appears only as an in vitro ALDH2 inhibitor; the pharmacogenomic effects (ALDH2*2 on GTN response) concern nitroglycerin, not chloral hydrate PK/PD. |
| popPK | Heidenreich_2004 | irrelevant | 0 | 0 | Chloral hydrate is only used as an anesthetic in a neurophysiology study; no PK parameters are reported. |
| popPK | Hernández-Gago_2026 | irrelevant | 0 | 0 | This is a systematic review of pediatric obesity dosing for various high-alert medications (amlodipine, vancomycin, propofol, etc.) with no mention of chloral hydrate or its metabolite anywhere in the evidence. |
| popPK | Johnson_1996 | irrelevant | 0 | 0 | Chloral hydrate is only used as an anesthetic in a rat cocaine electrophysiology study; no chloral hydrate PK parameters are reported. |
| popPK | Lestage_1987 | irrelevant | 0 | 0 | Chloral hydrate is only an anesthetic condition in a methionine incorporation study; no PK parameters for chloral hydrate are reported. |
| PGx | Lipscomb_1997 | not_relevant | 3 | 2 | Reports interindividual variability in CYP2E1-dependent TRI metabolism forming chloral hydrate, not a pharmacogenomic effect on chloral hydrate's own PK/PD parameters. |
| popPK | Luo_2024 | irrelevant | 0 | 0 | Chloral hydrate is only used as an anesthetic reagent in a rat metabolomics/microbiota study of pulchinenoside B4; no PK parameters for chloral hydrate are reported. |
| popPK | Machová_2024 | irrelevant | 0 | 0 | This is a nanoparticle toxicity/bioimaging study with no chloral hydrate PK parameters anywhere in the evidence. |
| popPK | Mahmoud_2020 | irrelevant | 0 | 0 | This is a narrative review of dexmedetomidine, not chloral hydrate; chloral hydrate is only mentioned once as a comparator sedative, with no PK parameters for it. |
| PGx | McIntyre_1985 | not_relevant | 3 | 1 | Selectively-bred mouse lines show differential sensitivity to chloral hydrate, but no gene variant/genotype effect on a specific PK/PD parameter is quantified. |
| popPK | Mitrovic_1996 | irrelevant | 0 | 0 | Chloral hydrate is only used as an anesthetic in rat electrophysiology; no PK parameters are reported. |
| popPK | Peoples_1994 | irrelevant | 0 | 0 | In-vitro electrophysiology of trichloroethanol (chloral hydrate's metabolite) on GABA currents; no PK disposition parameters reported. |
| popPK | Phillips_2026 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study of memantine's NMDA receptor blockade, with no chloral hydrate pharmacokinetic parameters. |
| popPK | Pistis_1997 | irrelevant | 0 | 0 | In-vitro electrophysiology study of trichloroethanol (chloral hydrate metabolite) effects on receptors; no PK disposition parameters (CL, V, half-life) reported. |
| popPK | Reynolds_2024 | irrelevant | 0 | 0 | This is a nicotine neuroscience study in mice with no chloral hydrate PK parameters or disposition data. |
| popPK | Rodolico_2022 | irrelevant | 0 | 0 | A Cochrane review of antipsychotic dose reduction in schizophrenia with no chloral hydrate PK data or parameters. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | This is a bumetanide ASD trial; chloral hydrate is only a sedation agent, with no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
