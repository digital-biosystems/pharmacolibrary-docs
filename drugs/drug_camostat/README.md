<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02A&quot;,&quot;href&quot;:&quot;atc/B02A.md&quot;},{&quot;label&quot;:&quot;camostat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Camostat_Kosinsky2022_reference&quot;,&quot;label&quot;:&quot;Kosinsky_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_camostat/Camostat_Kosinsky2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# camostat

- **generic name:** camostat
- **ATC codes:** `B02AB04`
- **DrugBank:** [DB13729](https://go.drugbank.com/drugs/DB13729) · **PubChem:** not captured
- **molar mass:** 398.4125 g/mol (C20H22N4O5) — DrugBank
- **groups:** investigational

## About

Camostat is a protease inhibitor that blocks trypsin and has been investigated as an oral drug, including for pancreatitis-related conditions. It is not authorised in the European Union and remains investigational rather than in routine approved use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5026909](https://www.wikidata.org/wiki/Q5026909) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| camostat | parent | 398.413 | C20H22N4O5 | DrugBank | — | Kosinsky_2022 |
| camostat mesylate | metabolite | 494.519 | C21H26N4O8S | PubChem | [5284360](https://pubchem.ncbi.nlm.nih.gov/compound/5284360) | Kim_2023, Kitagawa_2021 |
| FOY-251 | metabolite | 313 | — | the paper | — | Kosinsky_2022 |
| GBA | metabolite | 179.179 | C8H9N3O2 | PubChem | [159772](https://pubchem.ncbi.nlm.nih.gov/compound/159772) | Kim_2023 |
| GBPA | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 17:00 | 16:24 | 0/2/1 | 1/0/0 | 0/0/0 | 297,088/49,645 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 0/11 | 11/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.583). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Kosinsky_2022_reference](drugs/drug_camostat/Camostat_Kosinsky2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Kosinsky Y et al., Semi-Mechanistic Pharmacokinetic-Pharma…, Microbiology spectrum (2022) | [10.1128/spectrum.02167-21](https://doi.org/10.1128/spectrum.02167-21) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Kim_2023_reference](drugs/drug_camostat/Camostat_Kim2023_reference.md) | — | general linear (no model) | 6 | Kim G et al., Safety Evaluation and Population Pharma…, Pharmaceutics (2023) | [10.3390/pharmaceutics15092357](https://doi.org/10.3390/pharmaceutics15092357) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kitagawa_2021_reference](drugs/drug_camostat/Camostat_Kitagawa2021_reference.md) | — | 2-compartment (no model) | 0 | Kitagawa J et al., A phase I study of high dose camostat m…, Clinical and translational… (2021) | [10.1111/cts.13052](https://doi.org/10.1111/cts.13052) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kosinsky_2022_SP](drugs/drug_camostat/pd_Kosinsky_2022_SP.md) | TMPRSS2 activity ← FOY-251 · target-mediated drug disposition | — | Kosinsky Y et al., Semi-Mechanistic Pharmacokinetic-Pharma…, Microbiology spectrum (2022) | [10.1128/spectrum.02167-21](https://doi.org/10.1128/spectrum.02167-21) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=camostat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CCK (inhibitor), PRSS1 (inhibitor), ST14 (inhibitor), TMPRSS2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Miyazaki_2003.pdf` | Miyazaki M et al., Estimation of bioavailability of salmon…, Drug metabolism and pharmac… (2003) | pd | 5 | [10.2133/dmpk.18.358](https://doi.org/10.2133/dmpk.18.358) | [15618756](https://www.ncbi.nlm.nih.gov/pubmed/15618756) | metadata signals extractable PD data (PK-PD) |

<sub>queue written 2026-10-05T16:45:30.957002+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kreutzberger_2021 | irrelevant | 0 | 0 | The study is an in-vitro virology experiment measuring the antiviral efficacy (EC50) of camostat against SARS-CoV-2, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Mahoney_2021 | irrelevant | 0 | 0 | The study focuses on novel TMPRSS2 inhibitors (MM3122, VD2173) and uses camostat only as a comparator for antiviral activity and protease selectivity, without reporting pharmacokinetic parameters for camostat. |
| popPK | Meng_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel aloperine derivatives, and camostat is only mentioned as a comparator for binding mode, with no PK data provided. |
| PD | Meng_2024 | not_relevant | 1 | 1 | The paper reports in vitro antiviral EC50 values for a novel compound (3i) and mentions camostat only as a mechanistic comparison, providing no exposure-response or dose-response data for camostat. |
| popPK | Miyazaki_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of salmon calcitonin, with camostat serving only as a co-administered protease inhibitor/comparator. |
| popPK | Raghavan_2022 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study where camostat is used only as a comparator for TMPRSS2 inhibition, with no pharmacokinetic parameters reported. |
| PGx | Rizka_2023 | not_relevant | 0 | 0 | The paper is a computational screening study for SARS-CoV-2 inhibitors and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of camostat. |
| PGx | Wagoner_2022 | not_relevant | 0 | 0 | The paper reports in vitro pharmacodynamic synergy of drug combinations against SARS-CoV-2 but does not investigate the impact of host gene variants or genotypes on the PK or PD of camostat. |
| PGx | Weiss_2021 | not_relevant | 0 | 0 | The paper investigates the potential of camostat to cause drug-drug interactions via transporter and enzyme inhibition, not the effect of genetic variants on camostat's pharmacokinetics or pharmacodynamics. |
| popPK | Yamamoto_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of SARS-CoV-2 entry inhibition, and camostat is used only as a comparator agent with no pharmacokinetic parameters reported. |
| popPK | Yuan_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study where camostat is mentioned only as a comparator or excluded hit, with no pharmacokinetic parameters reported. |
| PD | Yuan_2020 | not_relevant | 0 | 0 | The paper does not mention camostat; it screens other FDA-approved drugs (bexarotene, cetilistat, diiodohydroxyquinoline, abiraterone) for anti-SARS-CoV-2 activity. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 16:46 UTC</sub>
