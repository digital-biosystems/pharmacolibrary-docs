<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;etodolac&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Etodolac_de2017_reference&quot;,&quot;label&quot;:&quot;de_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_etodolac/Etodolac_de2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# etodolac

- **generic name:** etodolac
- **ATC codes:** `M01AB08`
- **DrugBank:** [DB00749](https://go.drugbank.com/drugs/DB00749) · **PubChem:** [CID 3308](https://pubchem.ncbi.nlm.nih.gov/compound/3308)
- **molar mass:** 287.3535 g/mol (C17H21NO3) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

It is an approved medicine, also approved for veterinary use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2465218](https://www.wikidata.org/wiki/Q2465218) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| etodolac | parent | 287.353 | C17H21NO3 | DrugBank | [3308](https://pubchem.ncbi.nlm.nih.gov/compound/3308) | Baek_2019, de_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:48 | 0:21 | 1/2/0 | 0/1/1 | 0/0/0 | 47,202/3,550 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span> | [de_2017_reference](drugs/drug_etodolac/Etodolac_de2017_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | de Miranda Silva C et al., Development of an Enantioselective and…, The AAPS journal (2017) | [10.1208/s12248-017-0138-9](https://doi.org/10.1208/s12248-017-0138-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Baek_2019_reference](drugs/drug_etodolac/Etodolac_Baek2019_reference.md) | — | 1-compartment (no model) | 5 | Baek IH, Pharmacokinetic modeling and simulation…, Xenobiotica; the fate of fo… (2019) | [10.1080/00498254.2018.1524185](https://doi.org/10.1080/00498254.2018.1524185) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.286). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Boni_1999_reference](drugs/drug_etodolac/Etodolac_Boni1999_reference.md) | — | 1-compartment (no model) | 0 | Boni J et al., Pharmacokinetic and pharmacodynamic act…, Journal of clinical pharmac… (1999) | [10.1177/00912709922008254](https://doi.org/10.1177/00912709922008254) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Boni_1999_pain_intensity_difference_scores](drugs/drug_etodolac/pd_Boni_1999_pain_intensity_difference_scores.md) | pain intensity difference scores ← etodolac · indirect response — drug inhibits the production of pain intensity difference scores | model (no simulator) | Boni J et al., Pharmacokinetic and pharmacodynamic act…, Journal of clinical pharmac… (1999) | [10.1177/00912709922008254](https://doi.org/10.1177/00912709922008254) |
| <span class="pk-badge pk-badge--red">rejected</span> | [de_2017_pain_score](drugs/drug_etodolac/pd_de_2017_pain_score.md) | pain score ← S-etodolac · direct Emax (saturable) effect | — | de Miranda Silva C et al., Development of an Enantioselective and…, The AAPS journal (2017) | [10.1208/s12248-017-0138-9](https://doi.org/10.1208/s12248-017-0138-9) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baek_2019.pdf` | Baek IH, Pharmacokinetic modeling and simulation…, Xenobiotica; the fate of fo… (2019) | popPK | 10 | [10.1080/00498254.2018.1524185](https://doi.org/10.1080/00498254.2018.1524185) | [30216103](https://pubmed.ncbi.nlm.nih.gov/30216103) | The abstract reports quantitative pharmacokinetic parameters including absorption rate (Ka = 1.49 h-1), half-life (39.55 h), and AUC values for etodolac in dogs. |
| `Boni_1999.pdf` | Boni J et al., Pharmacokinetic and pharmacodynamic act…, Journal of clinical pharmac… (1999) | popPK | 10 | [10.1177/00912709922008254](https://doi.org/10.1177/00912709922008254) | [10392328](https://pubmed.ncbi.nlm.nih.gov/10392328) | The study reports quantitative population pharmacokinetic parameters (clearance, volume, ka) for etodolac in humans, with all numeric values explicitly provided in the text. |
| `Davis_2007.pdf` | Davis JL et al., Pharmacokinetics of etodolac in the hor…, Journal of veterinary pharm… (2007) | popPK | 10 | [10.1111/j.1365-2885.2007.00811.x](https://doi.org/10.1111/j.1365-2885.2007.00811.x) | [17217400](https://pubmed.ncbi.nlm.nih.gov/17217400) | The paper explicitly reports quantitative pharmacokinetic parameters (half-life, volume of distribution, clearance, bioavailability) for etodolac in horses. |
| `de_2017.pdf` | de Miranda Silva C et al., Development of an Enantioselective and…, The AAPS journal (2017) | popPK | 10 | [10.1208/s12248-017-0138-9](https://doi.org/10.1208/s12248-017-0138-9) | [28875479](https://pubmed.ncbi.nlm.nih.gov/28875479) | The evidence explicitly reports quantitative population PK parameters (clearance and volume of distribution) for both R- and S-etodolac in human subjects. |

<sub>queue written 2026-10-07T00:48:08.133429+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Benet_1993 | irrelevant | 3 | 0 | This appears to be a review article (based on the lack of specific study design details in the evidence) that only provides a general average half-life, without extracting specific compartmental parameters (CL, V, Q, ka) from a population or individual PK study in the provided text. |
| popPK | Poradowski_2019 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assessment of NSAIDs on canine cancer cells and does not report any pharmacokinetic parameters for etodolac. |
| popPK | Qosa_2016 | irrelevant | 0 | 0 | The study focuses on etodolac's ability to enhance blood-brain barrier integrity in an in-vitro cell model, reporting no pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:48 UTC</sub>
