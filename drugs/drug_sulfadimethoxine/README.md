<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfadimethoxine&quot;}]"></div>

# sulfadimethoxine

- **generic name:** sulfadimethoxine
- **ATC codes:** `J01ED01`
- **DrugBank:** [DB06150](https://go.drugbank.com/drugs/DB06150) · **PubChem:** [CID 5323](https://pubchem.ncbi.nlm.nih.gov/compound/5323)
- **molar mass:** 310.329 g/mol (C12H14N4O4S) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Sulfadimethoxine is a long-acting sulfonamide antibiotic used to treat bacterial infections. It has been withdrawn for human use but remains approved in veterinary medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4921678](https://www.wikidata.org/wiki/Q4921678) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sulfadimethoxine | parent | 310.329 | C12H14N4O4S | DrugBank | [5323](https://pubchem.ncbi.nlm.nih.gov/compound/5323) | Boulanger_2025, Chatfield_2001, Poapolathep_2017 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| t½ | t1/2z | 11.7 | h | 11.7 hr | adult camels | # Number of subjects in the analysis (a plain integer), or unknown | camelid | <span class="pk-badge pk-badge--orange">Needs review</span> | [Chatfield_2001_reference](drugs/drug_sulfadimethoxine/Sulfadimethoxine_Chatfield2001_reference.md) |
| F | Fab | 1.03 |  | 103 % | adult camels | # Number of subjects in the analysis (a plain integer), or unknown | camelid | <span class="pk-badge pk-badge--orange">Needs review</span> | [Chatfield_2001_reference](drugs/drug_sulfadimethoxine/Sulfadimethoxine_Chatfield2001_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="camelid" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub> | [Chatfield_2001_reference](drugs/drug_sulfadimethoxine/Sulfadimethoxine_Chatfield2001_reference.md) | held back | 1-compartment, IV | 5 | Chatfield J et al., Disposition of sulfadimethoxine in came…, Journal of zoo and wildlife… (2001) | [10.1638/1042-7260(2001)032[0430:DOSICC]2.0.CO;2](https://doi.org/10.1638/1042-7260(2001)032[0430:DOSICC]2.0.CO;2) |
| <span class="pk-rf" hidden data-species="fish" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Bakal_2004_reference](drugs/drug_sulfadimethoxine/Sulfadimethoxine_Bakal2004_reference.md) | — | 1-compartment (no model) | 0 | Bakal RS et al., Pharmacokinetics of sulfadimethoxine an…, Journal of veterinary pharm… (2004) | [10.1046/j.0140-7783.2003.00540.x](https://doi.org/10.1046/j.0140-7783.2003.00540.x) |
| <span class="pk-rf" hidden data-species="pig" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Boulanger_2025_reference](drugs/drug_sulfadimethoxine/Sulfadimethoxine_Boulanger2025_reference.md) | — | general linear (no model) | 3 | Boulanger M et al., Population pharmacokinetic modeling of…, The veterinary quarterly (2025) | [10.1080/01652176.2025.2565351](https://doi.org/10.1080/01652176.2025.2565351) |
| <span class="pk-rf" hidden data-species="other animal" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Poapolathep_2017_reference](drugs/drug_sulfadimethoxine/Sulfadimethoxine_Poapolathep2017_reference.md) | — | 1-compartment (no model) | 1 | Poapolathep A et al., Sulfadimethoxine in giant freshwater pr…, Journal of veterinary pharm… (2017) | [10.1111/jvp.12381](https://doi.org/10.1111/jvp.12381) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Mead_2026_bacterial_killing_rate](drugs/drug_sulfadimethoxine/pd_Mead_2026_bacterial_killing_rate.md) | bacterial killing rate ← sulfadimethoxine · direct sigmoid Emax (Hill) effect | — | Mead A et al., Pharmacodynamic interaction between tri…, Journal of applied microbio… (2026) | [10.1093/jambio/lxag106](https://doi.org/10.1093/jambio/lxag106) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:51 | 2:24 | 0/3/1 | 1/0/0 | 0/0/0 | 120,254/7,713 | einfracz / qwen3.8-27b | 3 | 2/1 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baggot_1977.pdf` | Baggot JD, Pharmacokinetics of sulfadimethoxine in…, The Australian journal of e… (1977) | popPK | 10 | [10.1038/icb.1977.66](https://doi.org/10.1038/icb.1977.66) | [614834](https://pubmed.ncbi.nlm.nih.gov/614834) | The paper reports quantitative pharmacokinetic parameters (clearance, half-life, compartmental model) for sulfadimethoxine in cats directly in the abstract. |
| `Chatfield_2001.pdf` | Chatfield J et al., Disposition of sulfadimethoxine in came…, Journal of zoo and wildlife… (2001) | popPK | 10 | [10.1638/1042-7260(2001)032[0430:DOSICC]2.0.CO;2](https://doi.org/10.1638/1042-7260(2001)032[0430:DOSICC]2.0.CO;2) | [12785697](https://pubmed.ncbi.nlm.nih.gov/12785697) | The study reports quantitative pharmacokinetic parameters (Vss, half-life, bioavailability) for sulfadimethoxine in camels, with values explicitly listed in the evidence. |
| `Poapolathep_2017.pdf` | Poapolathep A et al., Sulfadimethoxine in giant freshwater pr…, Journal of veterinary pharm… (2017) | popPK | 9 | [10.1111/jvp.12381](https://doi.org/10.1111/jvp.12381) | [27925222](https://pubmed.ncbi.nlm.nih.gov/27925222) | The paper reports a population PK model and quantitative parameters (AUC, bioavailability, withdrawal times) for sulfadimethoxine in giant freshwater prawns, though specific PK constants like CL or V are not explicitly listed in the text provided. |
| `Bakal_2004.pdf` | Bakal RS et al., Pharmacokinetics of sulfadimethoxine an…, Journal of veterinary pharm… (2004) | popPK | 8 | [10.1046/j.0140-7783.2003.00540.x](https://doi.org/10.1046/j.0140-7783.2003.00540.x) | [14995959](https://pubmed.ncbi.nlm.nih.gov/14995959) | The study reports quantitative pharmacokinetic parameters (half-life, Cmax, bioavailability) for sulfadimethoxine in hybrid striped bass. |
| `Bourne_1981.pdf` | Bourne DW et al., Disposition of sulfadimethoxine in catt…, Journal of pharmaceutical s… (1981) | popPK | 8 | [10.1002/jps.2600700926](https://doi.org/10.1002/jps.2600700926) | [6101158](https://pubmed.ncbi.nlm.nih.gov/6101158) | The study reports quantitative PK parameters (Ka and Pt) for sulfadimethoxine in cattle, but the primary standard PK parameters (CL, V, half-life) are not explicitly listed in the provided abstract text. |
| `Righter_1979.pdf` | Righter HF et al., Pharmacokinetic study of sulfadimethoxi…, American journal of veterin… (1979) | popPK | 8 | not captured | [475119](https://pubmed.ncbi.nlm.nih.gov/475119) | The paper reports a PK study of sulfadimethoxine in pigs, but the evidence contains only qualitative descriptions of parameters and trends, with no specific numeric values provided. |

<sub>queue written 2026-10-07T10:49:45.515161+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Borecka_2016 | irrelevant | 0 | 0 | This is an ecotoxicology study measuring the toxicity (EC50) of sulfadimethoxine to green algae, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Bourne_1981 | relevant | 8 | 3 | The study reports quantitative PK parameters (Ka and Pt) for sulfadimethoxine in cattle, but the primary standard PK parameters (CL, V, half-life) are not explicitly listed in the provided abstract text. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting sulfadimethoxine in samples, not a pharmacokinetic study reporting disposition parameters. |
| popPK | De_2007 | irrelevant | 1 | 0 | The study focuses on environmental persistence and degradation (manure/soil half-lives) rather than pharmacokinetic disposition parameters (CL, Vd, ka) in the animal. |
| popPK | Drobniewska_2017 | irrelevant | 0 | 0 | The study is an ecotoxicology investigation assessing the toxicity and photodegradation of sulfadimethoxine in Lemna minor, not a pharmacokinetic study of drug disposition in an organism. |
| popPK | Eguchi_2004 | irrelevant | 0 | 0 | The paper is an ecotoxicity study measuring the effective concentration (EC50) for antimicrobial growth inhibition in algae, not a pharmacokinetic study of sulfadimethoxine disposition. |
| popPK | Hakk_2016 | irrelevant | 0 | 0 | The study evaluates the distribution of spiked drugs between milk fractions in vitro (spiked whole milk) rather than measuring in vivo pharmacokinetic parameters (CL, V, t1/2) for sulfadimethoxine. |
| popPK | Huang_2016 | irrelevant | 0 | 0 | The study investigates the toxic effects of sulfadimethoxine on nitrification in active sludge and is not a pharmacokinetic study. |
| popPK | Mead_2026 | irrelevant | 1 | 0 | The study focuses on in vitro pharmacodynamic interactions and uses published porcine PK data for simulations without reporting new quantitative PK parameters for sulfadimethoxine. |
| popPK | Righter_1979 | relevant | 8 | 2 | The paper reports a PK study of sulfadimethoxine in pigs, but the evidence contains only qualitative descriptions of parameters and trends, with no specific numeric values provided. |
| popPK | Takahashi_1993 | irrelevant | 0 | 0 | The provided evidence contains only metadata from a software tool (GROBID) and lacks any scientific content, pharmacokinetic data, or mention of sulfadimethoxine. |
| popPK | Thiele-Bruhn_2005 | irrelevant | 0 | 0 | The study focuses on environmental microbial toxicity in soil, not pharmacokinetic disposition parameters. |
| popPK | Walker_1994 | irrelevant | 0 | 0 | The paper evaluates detection methods for sulfadimethoxine residues in catfish muscle and does not report pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 10:50 UTC</sub>
