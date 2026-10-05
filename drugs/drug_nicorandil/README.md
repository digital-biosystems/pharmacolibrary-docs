<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;nicorandil&quot;}]"></div>

# nicorandil

- **generic name:** nicorandil
- **ATC codes:** `C01DX16`
- **DrugBank:** [DB09220](https://go.drugbank.com/drugs/DB09220) · **PubChem:** [CID 47528](https://pubchem.ncbi.nlm.nih.gov/compound/47528)
- **molar mass:** 211.177 g/mol (C8H9N3O4) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Nicorandil is a vasodilator heart medicine used to treat angina (chest pain caused by reduced blood flow to the heart). It is not authorised in the European Union but remains in clinical use in some countries, where it is prescribed for cardiac patients.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q862989](https://www.wikidata.org/wiki/Q862989) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 21:20 | 8:34 | 0/0/3 | 3/1/0 | 0/0/0 | 239,674/13,506 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 16/0 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Iida_2008_obj](drugs/drug_nicorandil/Nicorandil_Iida2008_obj.md) | held back | 1-compartment, oral | 2 | Iida S et al., Population pharmacokinetic and pharmaco…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2008.03257.x](https://doi.org/10.1111/j.1365-2125.2008.03257.x) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Iida_2008_sig](drugs/drug_nicorandil/Nicorandil_Iida2008_sig.md) | held back | 1-compartment, oral | 2 | Iida S et al., Population pharmacokinetic and pharmaco…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2008.03257.x](https://doi.org/10.1111/j.1365-2125.2008.03257.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Iida_2008_2_reference](drugs/drug_nicorandil/Nicorandil_Iida2008v2_reference.md) | held back | 1-compartment, oral | 2 | Iida S et al., Population pharmacokinetic and pharmaco…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2008.03257.x](https://doi.org/10.1111/j.1365-2125.2008.03257.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Fujiwara_1996_membrane_potential](drugs/drug_nicorandil/pd_Fujiwara_1996_membrane_potential.md) | name ← nicorandil · direct sigmoid Emax (Hill) effect | — | Fujiwara T et al., Analysis of relaxation and repolarizati…, British journal of pharmaco… (1996) | [10.1111/j.1476-5381.1996.tb16071.x](https://doi.org/10.1111/j.1476-5381.1996.tb16071.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Fujiwara_1996_relaxation](drugs/drug_nicorandil/pd_Fujiwara_1996_relaxation.md) | name ← nicorandil · direct sigmoid Emax (Hill) effect | — | Fujiwara T et al., Analysis of relaxation and repolarizati…, British journal of pharmaco… (1996) | [10.1111/j.1476-5381.1996.tb16071.x](https://doi.org/10.1111/j.1476-5381.1996.tb16071.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Iida_2008_2_PAWP](drugs/drug_nicorandil/pd_Iida_2008_2_PAWP.md) | pulmonary artery wedge pressure ← nicorandil · disease-progression model | — | Iida S et al., Population pharmacokinetic and pharmaco…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2008.03257.x](https://doi.org/10.1111/j.1365-2125.2008.03257.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Shindo_1998_unknown](drugs/drug_nicorandil/pd_Shindo_1998_unknown.md) | K+ channel current ← pinacidil · direct Emax (saturable) effect | — | Shindo T et al., SUR2 subtype (A and B)-dependent differ…, British journal of pharmaco… (1998) | [10.1038/sj.bjp.0701927](https://doi.org/10.1038/sj.bjp.0701927) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Wanstall_1992_relaxation](drugs/drug_nicorandil/pd_Wanstall_1992_relaxation.md) | name ← pinacidil · direct Emax (saturable) effect | — | Wanstall JC et al., Responses to vasodilator drugs on pulmo…, British journal of pharmaco… (1992) | [10.1111/j.1476-5381.1992.tb14227.x](https://doi.org/10.1111/j.1476-5381.1992.tb14227.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nicorandil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABCC9 (activator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 12 returned
- **screened:** 16  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bachert_1993 | irrelevant | not captured | not captured | no extractable full text |
| popPK | Bedair_2023 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology investigation in rats focusing on antinociception and liver fibrosis, with no pharmacokinetic parameters reported. |
| popPK | Belz_1992 | irrelevant | not captured | not captured | no extractable full text |
| popPK | Fujiwara_1996 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on vascular smooth muscle relaxation and membrane potential, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for nicorandil. |
| popPK | Funatogawa_2007 | irrelevant | 2 | 0 | The paper is a methodological study proposing a new estimation technique for half-life, using nicorandil data only as an illustrative example without reporting original quantitative PK parameter values. |
| popPK | Henry_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilator potency and tolerance in isolated coronary arteries, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ishibashi_1991 | irrelevant | 0 | 0 | The paper is a mechanistic structure-activity relationship study on isolated rabbit aorta, not a pharmacokinetic study, and contains no disposition parameters for nicorandil. |
| popPK | Maekawa_1997 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no pharmacokinetic data or text regarding nicorandil. |
| PD | Maekawa_1997 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any scientific content regarding nicorandil or pharmacodynamics. |
| popPK | Satoh_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasorelaxant mechanisms in isolated arteries, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Shindo_1998 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study examining the mechanism of action of nicorandil on K+ channels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Wanstall_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilator potency (EC50) in rat pulmonary arteries, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Wei_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nicorandil's effect on ion channels in cardiac myocytes and does not report any pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-20 21:12 UTC</sub>
